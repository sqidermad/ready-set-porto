document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('.nav-link');
    
    // Content for each section
    const sections = {
        about: `
            <div class="fade-in">
                <h2>About Me</h2>
                <div style="text-align: left; max-width: 800px; margin: 0 auto;">
                    <p style="margin: 20px 0;">
                        👋 Hi there! I'm ____, a Full Stack Developer with 3 years of experience in creating 
                        beautiful and functional web applications. Based in the sunny city of Jakarta, I combine my 
                        technical expertise with a keen eye for design to build seamless user experiences.
                    </p>
                    
                    <h3 style="margin: 20px 0;">🚀 What I Do</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin: 10px 0;">💻 Frontend Development: React, Vue.js, TypeScript</li>
                        <li style="margin: 10px 0;">���️ Backend Development: Node.js, Python, PostgreSQL</li>
                        <li style="margin: 10px 0;">🎨 UI/UX Design: Figma, Adobe XD</li>
                        <li style="margin: 10px 0;">📱 Mobile Development: React Native</li>
                    </ul>

                    <h3 style="margin: 20px 0;">🎯 Current Focus</h3>
                    <p>Currently diving deep into cloud technologies and exploring the exciting world of AI/ML integration in web applications.</p>
                </div>
            </div>
        `,
        projects: `
            <div class="fade-in">
                <h2>Projects</h2>
                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">✨ EcoTracker</h3>
                        <p style="margin: 10px 0;">A sustainable living app that helps users track their carbon footprint and suggests eco-friendly alternatives.</p>
                        <p style="color: #666; margin: 10px 0;">🛠️ React Native, Node.js, MongoDB</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Demo</a>
                            <a href="#" style="color: #0066cc; text-decoration: none;">GitHub</a>
                        </div>
                    </div>
                    
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">🎨 ArtFolio</h3>
                        <p style="margin: 10px 0;">Digital portfolio platform for artists to showcase and sell their artwork directly to collectors.</p>
                        <p style="color: #666; margin: 10px 0;">🛠️ Vue.js, Firebase, Stripe API</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Demo</a>
                            <a href="#" style="color: #0066cc; text-decoration: none;">GitHub</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">🌟 MindfulMinutes</h3>
                        <p style="margin: 10px 0;">Meditation and mindfulness app with guided sessions and progress tracking.</p>
                        <p style="color: #666; margin: 10px 0;">🛠️ React, Express.js, PostgreSQL</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Demo</a>
                            <a href="#" style="color: #0066cc; text-decoration: none;">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div class="fade-in">
                <h2>Let's Connect!</h2>
                <div style="max-width: 600px; margin: 2rem auto; text-align: left;">
                    <p style="margin: 1rem 0;">I'm always excited to collaborate on interesting projects or just have a chat about technology and innovation. Feel free to reach out through any of these channels:</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0;">
                        <a href="mailto:yourname@example.com" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            📧 yourname@example.com
                        </a>
                        <a href="https://linkedin.com/in/yourname" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            💼 LinkedIn: /in/yourname
                        </a>
                        <a href="https://github.com/yourname" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            🐱 GitHub: @yourname
                        </a>
                        <a href="https://twitter.com/yourname" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            🐦 Twitter: @yourname
                        </a>
                    </div>

                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                        <h3 style="margin-bottom: 1rem;">🌟 Current Status</h3>
                        <p>Open to freelance projects and exciting collaboration opportunities!</p>
                    </div>
                </div>
            </div>
        `
    };

    // Show section content
    function showSection(sectionId) {
        content.innerHTML = sections[sectionId];
        
        // Update active link
        links.forEach(link => {
            link.classList.remove('active');
            if(link.dataset.section === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Add click handlers
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });

    // Show 'about' section by default when page loads
    showSection('about');
}); 