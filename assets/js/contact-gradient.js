// WebGL Animated Gradient Background for Contact Section
class ContactGradient {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });

    this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.time = 0;
    this.init();
    this.animate();
    this.handleResize();
  }

  init() {
    // Vertex shader - simple pass-through
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Fragment shader - animated gradient
    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      // Noise function for organic movement
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = vUv;

        // Create flowing gradient with noise
        float noise1 = snoise(uv * 3.0 + uTime * 0.15);
        float noise2 = snoise(uv * 2.0 - uTime * 0.1 + 100.0);
        float noise3 = snoise(uv * 4.0 + uTime * 0.2 + 200.0);

        // Combine noise for complex movement
        float pattern = (noise1 + noise2 * 0.5 + noise3 * 0.25);

        // Define gradient colors (darker purple theme)
        vec3 color1 = vec3(0.271, 0.28, 0.661);    // Darker purple
        vec3 color2 = vec3(0.271, 0.28, 0.661);    // Darker purple
        vec3 color3 = vec3(0.271, 0.28, 0.661);    // Darker purple
        vec3 color4 = vec3(0.071, 0.069, 0.656);   // Darker blue-purple

        // Create gradient based on UV and noise
        float gradientX = uv.x + pattern * 0.3;
        float gradientY = uv.y + pattern * 0.2;

        // Mix colors based on position and time
        vec3 color = mix(color1, color2, smoothstep(0.0, 1.0, gradientX));
        color = mix(color, color3, smoothstep(0.3, 0.8, gradientY + sin(uTime * 0.1) * 0.2));
        color = mix(color, color4, smoothstep(0.0, 0.5, pattern * 0.5 + 0.5));

        // Reduce overall brightness
        float brightness = 0.85 + pattern * 0.08;
        color *= brightness;

        // Smooth vignette effect
        float vignette = smoothstep(1.2, 0.3, length(uv - 0.5));
        color *= mix(0.7, 1.0, vignette);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create shader material
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(this.canvas.offsetWidth, this.canvas.offsetHeight) }
      }
    });

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(mesh);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.time += 0.03;
    this.material.uniforms.uTime.value = this.time;

    this.renderer.render(this.scene, this.camera);
  }

  handleResize() {
    window.addEventListener('resize', () => {
      const width = this.canvas.offsetWidth;
      const height = this.canvas.offsetHeight;

      this.renderer.setSize(width, height);
      this.material.uniforms.uResolution.value.set(width, height);
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const contactGradient = new ContactGradient('contact-gradient-canvas');
});
