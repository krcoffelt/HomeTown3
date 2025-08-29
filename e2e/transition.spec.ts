import { test, expect } from '@playwright/test';

test.describe('Fabrica-style Page Transitions', () => {
  test('should perform client-side navigation without document reload', async ({ page }) => {
    // Navigate to homepage and wait for it to load
    await page.goto('http://localhost:3001');
    await page.waitForSelector('[data-qa="transition-wrapper"]');
    
    // Record network requests to detect document reloads
    const requests = [];
    page.on('request', (request) => {
      if (request.resourceType() === 'document' && request.url().includes('localhost:3001')) {
        requests.push(request.url());
      }
    });
    
    // Clear any initial document requests
    requests.length = 0;
    
    // Click navigation link to another route
    await page.click('a[href="/projects"]');
    await page.waitForTimeout(1000); // Wait for transition
    
    // Assert no new document requests after initial load
    expect(requests.length).toBe(0);
    
    // Verify we're on the new page
    expect(page.url()).toContain('/projects');
  });

  test('should keep header position stable during transitions', async ({ page }) => {
    await page.goto('http://localhost:3001');
    await page.waitForSelector('[data-qa="site-header"]');
    
    // Get header position before navigation
    const headerBefore = await page.locator('[data-qa="site-header"]').boundingBox();
    
    // Navigate to another page
    await page.click('a[href="/projects"]');
    await page.waitForTimeout(600); // Wait for transition to complete
    
    // Get header position after navigation
    const headerAfter = await page.locator('[data-qa="site-header"]').boundingBox();
    
    // Header should stay in same position (±1px tolerance)
    expect(Math.abs(headerBefore.y - headerAfter.y)).toBeLessThanOrEqual(1);
    expect(Math.abs(headerBefore.x - headerAfter.x)).toBeLessThanOrEqual(1);
  });

  test('should animate transition wrapper with correct timing', async ({ page }) => {
    await page.goto('http://localhost:3001');
    await page.waitForSelector('[data-qa="transition-wrapper"]');
    
    // Start monitoring the transition wrapper styles
    const transitionWrapper = page.locator('[data-qa="transition-wrapper"]');
    
    // Click navigation link and monitor style changes over time
    await page.click('a[href="/contact"]');
    
    // Monitor transform/opacity changes - transition uses translateY curtain
    let changed = false;
    for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(50);
      const styles = await transitionWrapper.evaluate(el => {
        const cs = window.getComputedStyle(el);
        return { opacity: parseFloat(cs.opacity), transform: cs.transform };
      });
      if (styles.opacity !== 1 || (styles.transform && styles.transform !== 'none')) { changed = true; break; }
    }
    
    // Should see some animation indicator at some point during transition
    expect(changed).toBe(true);
    
    // Wait for transition to complete and check final state
    await page.waitForTimeout(1000);
    const finalStyles = await transitionWrapper.evaluate(el => {
      const cs = window.getComputedStyle(el);
      return { opacity: parseFloat(cs.opacity), transform: cs.transform };
    });
    expect(finalStyles.opacity).toBeCloseTo(1, 1);
  
    // Verify we're on the correct page
    expect(page.url()).toContain('/contact');
  });

  test('should respect reduced motion preferences', async ({ browser }) => {
    // Create context with reduced motion preference
    const context = await browser.newContext({
      reducedMotion: 'reduce'
    });
    const page = await context.newPage();
    
    await page.goto('http://localhost:3001');
    await page.waitForSelector('[data-qa="transition-wrapper"]');
    
    // Get initial opacity
    const transitionWrapper = page.locator('[data-qa="transition-wrapper"]');
    const initialOpacity = await transitionWrapper.evaluate(el => 
      parseFloat(window.getComputedStyle(el).opacity)
    );
    
    // Click navigation
    await page.click('a[href="/services"]');
    
    // With reduced motion, transition should complete much faster
    // Check that opacity returns to 1 quickly (within 200ms instead of 500ms)
    await page.waitForTimeout(200);
    const quickOpacity = await transitionWrapper.evaluate(el => 
      parseFloat(window.getComputedStyle(el).opacity)
    );
    
    // Should be near 1 already with reduced motion
    expect(quickOpacity).toBeGreaterThan(0.8);
    
    await context.close();
  });

  test('should navigate between all main routes successfully', async ({ page }) => {
    await page.goto('http://localhost:3001');
    
    const routes = ['/', '/projects', '/services', '/blog', '/contact'];
    
    for (const route of routes) {
      await page.goto(`http://localhost:3001${route}`);
      await page.waitForSelector('[data-qa="transition-wrapper"]');
      
      // Verify page loads and transition wrapper is visible
      const wrapper = page.locator('[data-qa="transition-wrapper"]');
      await expect(wrapper).toBeVisible();
      
      // Verify opacity is 1 (fully loaded)
      const opacity = await wrapper.evaluate(el => 
        parseFloat(window.getComputedStyle(el).opacity)
      );
      expect(opacity).toBe(1);
    }
  });
});
