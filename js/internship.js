// internship.js

const internshipData = [
    {
        id: 1,
        title: "Cybersecurity Internship",
        category: "Security",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        duration: "30 Days",
        mode: "Online + Offline",
        badge: "HOT",
        badgeColor: "#ff4444",
        skills: ["Ethical Hacking", "Penetration Testing", "Network Security"],
        description: "Gain hands-on experience in real-world cybersecurity operations, threat detection, and incident response.",
        link: "https://wa.me/917678542845?text=Hi%2C%20I'm%20interested%20in%20Cybersecurity%20Internship"
    },
    {
        id: 2,
        title: "Digital Forensics Internship",
        category: "Forensics",
        image: "https://images.unsplash.com/photo-1581090700227-4c4b1c1a5b72",
        duration: "30 Days",
        mode: "Online",
        badge: "NEW",
        badgeColor: "#00d4ff",
        skills: ["Evidence Collection", "Malware Analysis", "Case Investigation"],
        description: "Work on real cyber crime investigation cases under expert guidance.",
        link: "https://wa.me/917678542845?text=Hi%2C%20I'm%20interested%20in%20Digital%20Forensics%20Internship"
    },
    {
        id: 3,
        title: "SOC Analyst Internship",
        category: "SOC",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        duration: "30 Days",
        mode: "Online",
        badge: "POPULAR",
        badgeColor: "#bc13fe",
        skills: ["SIEM Tools", "Log Analysis", "Threat Monitoring"],
        description: "Work inside a live Security Operations Center and monitor real-time threats.",
        link: "https://wa.me/917678542845?text=Hi%2C%20I'm%20interested%20in%20SOC%20Analyst%20Internship"
    },
    {
        id: 4,
        title: "AI / ML Internship",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442135136-760c813a7430",
        duration: "30 Days",
        mode: "Online",
        badge: "TRENDING",
        badgeColor: "#2bdb2b",
        skills: ["Python", "Machine Learning", "Data Analysis"],
        description: "Build real AI models and work on live projects with industry mentors.",
        link: "https://wa.me/917678542845?text=Hi%2C%20I'm%20interested%20in%20AI%20ML%20Internship"
    },
    {
        id: 5,
        title: "Full Stack Development",
        category: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        duration: "30 Days",
        mode: "Online",
        badge: "POPULAR",
        badgeColor: "#ff7504",
        skills: ["HTML/CSS/JS", "React", "Node.js"],
        description: "Build complete web applications from scratch with real client projects.",
        link: "https://wa.me/917678542845?text=Hi%2C%20I'm%20interested%20in%20Full%20Stack%20Internship"
    },
    {
        id: 6,
        title: "Data Science Internship",
        category: "Data",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        duration: "30 Days",
        mode: "Online",
        badge: "NEW",
        badgeColor: "#00d4ff",
        skills: ["Python", "Data Visualization", "SQL"],
        description: "Analyze real datasets and create dashboards for business insights.",
        link: "https://wa.me/917678542845?text=Hi%2C%20I'm%20interested%20in%20Data%20Science%20Internship"
    }
];

function renderInternshipCards() {
    const grid = document.getElementById('internshipGrid');

    if (!grid) {
        console.error("internshipGrid not found");
        return;
    }

    let html = '';

    internshipData.forEach((item, index) => {
        html += `
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="internship-card">

                <div class="internship-img-wrap">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="internship-overlay"></div>

                    <div class="internship-badge" style="background:${item.badgeColor}">
                        ${item.badge}
                    </div>

                    <div class="internship-category">
                        ${item.category}
                    </div>
                </div>

                <div class="internship-body">
                    <h4 class="internship-title">${item.title}</h4>

                    <div class="internship-meta">
                        <span><i class="fas fa-clock"></i> ${item.duration}</span>
                        <span><i class="fas fa-laptop"></i> ${item.mode}</span>
                    </div>

                    <p class="internship-desc">${item.description}</p>

                    <div class="internship-skills d-flex flex-wrap gap-1 mb-3">
                        ${item.skills.map(skill => `
                            <span style="background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.3);
                            color:#00d4ff; padding:2px 8px; border-radius:20px; font-size:11px;">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>

<a href="https://forms.gle/msTyHYuXtMW5h22q6" target="_blank" class="internship-apply-btn">
    🚀 Join Now
</a>
                </div>

            </div>
        </div>
        `;
    });

    grid.innerHTML = html;

    if (typeof AOS !== "undefined") {
        AOS.init();
    }
}

document.addEventListener("DOMContentLoaded", renderInternshipCards);