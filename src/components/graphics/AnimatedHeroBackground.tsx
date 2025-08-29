'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    // Try WebGL2, then WebGL1 as a fallback
    const gl2 = canvas.getContext('webgl2', { antialias: true, premultipliedAlpha: false }) as WebGL2RenderingContext | null;
    const gl1 = !gl2 ? canvas.getContext('webgl', { antialias: true, premultipliedAlpha: false }) as WebGLRenderingContext | null : null;

    const isGL2 = !!gl2;
    const gl = (gl2 as WebGL2RenderingContext) || (gl1 as unknown as WebGL2RenderingContext); // treat uniformly where possible
    if (!gl) {
      // Fallback to 2D radial-gradient animation
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const resize2d = () => {
        const { clientWidth, clientHeight } = canvas;
        const width = Math.max(1, Math.floor(clientWidth * dpr));
        const height = Math.max(1, Math.floor(clientHeight * dpr));
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
      };
      const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
      let start = performance.now();
      const render2d = (now: number) => {
        resize2d();
        const w = canvas.width, h = canvas.height;
        const t = prefersReduce.matches ? 0 : (now - start) / 1000;
        ctx.clearRect(0, 0, w, h);
        // background
        ctx.fillStyle = '#171717';
        ctx.fillRect(0, 0, w, h);
        // radial rings
        const cx = w / 2, cy = h / 2;
        const maxR = Math.sqrt(cx*cx + cy*cy);
        const r = ((t * 0.2) % 1) * maxR * 0.75;
        const grad = ctx.createRadialGradient(cx, cy, Math.max(1, r-20), cx, cy, r+40);
        grad.addColorStop(0, 'rgba(255,255,255,0.28)');
        grad.addColorStop(1, 'rgba(255,255,255,0.0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r+60, 0, Math.PI*2);
        ctx.fill();
        // light vignette
        const vg = ctx.createRadialGradient(cx, cy, maxR*0.2, cx, cy, maxR);
        vg.addColorStop(0, 'rgba(0,0,0,0)');
        vg.addColorStop(1, 'rgba(0,0,0,0.25)');
        ctx.fillStyle = vg;
        ctx.fillRect(0,0,w,h);
        rafRef.current = requestAnimationFrame(render2d);
      };
      rafRef.current = requestAnimationFrame(render2d);
      const onResize = () => resize2d();
      window.addEventListener('resize', onResize);
      cleanupRef.current = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        window.removeEventListener('resize', onResize);
      };
      return () => cleanupRef.current?.();
    }

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      const width = Math.max(1, Math.floor(clientWidth * dpr));
      const height = Math.max(1, Math.floor(clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    // Shaders for GL2 and GL1
    const vert2 = `#version 300 es
      precision highp float;
      in vec2 aPos;
      out vec2 vUV;
      void main(){
        vUV = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;
    const frag2 = `#version 300 es
      precision highp float;
      in vec2 vUV;
      out vec4 outColor;
      uniform vec2 uResolution;
      uniform float uTime;
      void main(){
        vec2 uv = vUV;
        vec2 center = vec2(0.5, 0.5);
        vec2 p = uv - center;
        p.x *= uResolution.x / uResolution.y;
        vec3 col = vec3(0.09);
        float t = fract(uTime * 0.2);
        float r = mix(0.0, 0.75, t);
        float d = abs(length(p) - r);
        float ring = smoothstep(0.02, 0.0, d) * (1.0 - t);
        float r2 = mix(0.1, 0.9, fract(uTime * 0.1 + 0.33));
        float d2 = abs(length(p) - r2);
        float ring2 = smoothstep(0.015, 0.0, d2) * 0.3;
        float vignette = smoothstep(0.95, 0.2, length(p));
        col = mix(col, col * 0.9, vignette * 0.4);
        col += vec3(1.0) * (ring + ring2);
        col = min(col, vec3(1.0));
        outColor = vec4(col, 1.0);
      }
    `;

    const vert1 = `
      attribute vec2 aPos;
      varying vec2 vUV;
      void main(){
        vUV = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;
    const frag1 = `
      precision mediump float;
      varying vec2 vUV;
      uniform vec2 uResolution;
      uniform float uTime;
      void main(){
        vec2 uv = vUV;
        vec2 center = vec2(0.5, 0.5);
        vec2 p = uv - center;
        p.x *= uResolution.x / uResolution.y;
        vec3 col = vec3(0.09);
        float t = fract(uTime * 0.2);
        float r = mix(0.0, 0.75, t);
        float d = abs(length(p) - r);
        float ring = smoothstep(0.02, 0.0, d) * (1.0 - t);
        float r2 = mix(0.1, 0.9, fract(uTime * 0.1 + 0.33));
        float d2 = abs(length(p) - r2);
        float ring2 = smoothstep(0.015, 0.0, d2) * 0.3;
        float vignette = smoothstep(0.95, 0.2, length(p));
        col = mix(col, col * 0.9, vignette * 0.4);
        col += vec3(1.0) * (ring + ring2);
        col = min(col, vec3(1.0));
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compileShader(ctx: WebGLRenderingContext | WebGL2RenderingContext, type: number, src: string) {
      const shader = ctx.createShader(type)!;
      ctx.shaderSource(shader, src);
      ctx.compileShader(shader);
      if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
        console.error(ctx.getShaderInfoLog(shader));
        ctx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl, isGL2 ? (gl as WebGL2RenderingContext).VERTEX_SHADER : (gl as WebGLRenderingContext).VERTEX_SHADER, isGL2 ? vert2 : vert1);
    const fs = compileShader(gl, isGL2 ? (gl as WebGL2RenderingContext).FRAGMENT_SHADER : (gl as WebGLRenderingContext).FRAGMENT_SHADER, isGL2 ? frag2 : frag1);
    if (!vs || !fs) return;
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    const data = new Float32Array([ -1, -1, 1, -1, -1, 1, 1, 1 ]);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    const aPosLoc = gl.getAttribLocation(program, 'aPos');
    const uRes = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let start = performance.now();

    const render = (now: number) => {
      resize();
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      if (isGL2) {
        (gl as WebGL2RenderingContext).enableVertexAttribArray(aPosLoc);
        (gl as WebGL2RenderingContext).vertexAttribPointer(aPosLoc, 2, (gl as WebGL2RenderingContext).FLOAT, false, 0, 0);
      } else {
        (gl as WebGLRenderingContext).enableVertexAttribArray(aPosLoc);
        (gl as WebGLRenderingContext).vertexAttribPointer(aPosLoc, 2, (gl as WebGLRenderingContext).FLOAT, false, 0, 0);
      }
      gl.uniform2f(uRes, canvas.width, canvas.height);
      const t = mediaQuery.matches ? 0.0 : (now - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };

    resize();
    rafRef.current = requestAnimationFrame(render);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    cleanupRef.current = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      // Try to release context politely if possible
      // @ts-ignore webgl1 extension name
      (gl as any).getExtension?.('WEBGL_lose_context')?.loseContext?.();
    };
    return () => cleanupRef.current?.();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block rounded-3xl"
      aria-hidden="true"
    />
  );
}
