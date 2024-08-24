document.addEventListener('DOMContentLoaded', function () {

    // Function to generate the resume
    function generateResume() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;
        const projects = document.getElementById('projects').value;
        const certifications = document.getElementById('certifications').value;
        const theme = document.getElementById('theme').value;
        const fontSize = document.getElementById('fontSize').value;

        if (!name || !email || !phone || !education || !experience || !skills) {
            alert('Please fill in all required fields.');
            return;
        }

        const resumeTemplate = `
            <div class="${theme}" style="font-size: ${fontSize}px;">
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <h3>Education</h3>
                <p>${education.replace(/\n/g, '<br>')}</p>

                <h3>Experience</h3>
                <p>${experience.replace(/\n/g, '<br>')}</p>

                <h3>Skills</h3>
                <p>${skills.replace(/\n/g, '<br>')}</p>

                ${projects ? `<h3>Projects</h3><p>${projects.replace(/\n/g, '<br>')}</p>` : ''}
                ${certifications ? `<h3>Certifications</h3><p>${certifications.replace(/\n/g, '<br>')}</p>` : ''}
            </div>
        `;

        document.getElementById('resumeOutput').innerHTML = resumeTemplate;
    }

    // Function to download the resume as a PDF
    function downloadResume() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        pdf.html(document.getElementById('resumeOutput'), {
            callback: function (pdf) {
                pdf.save('resume.pdf');
            },
            x: 10,
            y: 10,
            width: 190,
            windowWidth: 650
        });
    }

    // Add event listener to adjust font size in real-time
    document.getElementById('fontSize').addEventListener('input', function () {
        const fontSize = this.value;
        document.getElementById('resumeOutput').style.fontSize = `${fontSize}px`;
    });

    // Assign functions to the global scope for button clicks
    window.generateResume = generateResume;
    window.downloadResume = downloadResume;
});
