document.addEventListener("DOMContentLoaded", function () {
  // Initialize particles
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "absolute w-1 h-1 bg-primary/20 rounded-full";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      5 + Math.random() * 5
    }s linear infinite`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
  }
  // 3D Parallax Effect
  document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    document.querySelector(
      ".absolute.inset-0"
    ).style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg) scale(1.1)`;
  });
  // Custom cursor
  const cursor = document.querySelector(".cursor-custom");
  const links = document.querySelectorAll("a, button");
  document.addEventListener("mousemove", (e) => {
    cursor.style.display = "block";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });
  });
  // Mobile menu toggle
  const menuButton = document.querySelector(".md\\:hidden");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  // Theme switch
  const themeSwitches = document.querySelectorAll(".theme-switch");
  themeSwitches.forEach((themeSwitch) => {
    themeSwitch.addEventListener("click", () => {
      themeSwitch.classList.toggle("dark");
      document.documentElement.classList.toggle("dark");
      // Save theme preference
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      // Sync all theme switches
      themeSwitches.forEach((sw) => {
        if (isDark) {
          sw.classList.add("dark");
        } else {
          sw.classList.remove("dark");
        }
      });
    });

    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    function revealElements() {
      const windowHeight = window.innerHeight;
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }
    window.addEventListener("scroll", () => {
      requestAnimationFrame(revealElements);
    });
    window.addEventListener("load", () => {
      setTimeout(revealElements, 100);
    });
    // Back to top button
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove("opacity-0", "invisible");
        backToTopButton.classList.add("opacity-100", "visible");
      } else {
        backToTopButton.classList.add("opacity-0", "invisible");
        backToTopButton.classList.remove("opacity-100", "visible");
      }
    });
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    // Parallax effect
    const parallaxElements = document.querySelectorAll(".parallax");
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      parallaxElements.forEach((element) => {
        const offsetX = (x - 0.5) * 20;
        const offsetY = (y - 0.5) * 20;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    });
    // Project filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) =>
          btn.classList.remove(
            "active",
            "bg-white",
            "shadow-sm",
            "text-primary"
          )
        );
        filterButtons.forEach((btn) =>
          btn.classList.add("text-gray-600", "hover:text-gray-800")
        );
        // Add active class to clicked button
        button.classList.add("active", "bg-white", "shadow-sm", "text-primary");
        button.classList.remove("text-gray-600", "hover:text-gray-800");
        // TODO: Implement actual filtering
      });
    });
    // Project modal
    const viewProjectButtons = document.querySelectorAll(".view-project");
    const modal = document.getElementById("project-modal");
    const closeModal = document.getElementById("close-modal");
    const projectData = [
      {
        id: 1,
        title: "Ping Site",
        image: "/ping2.png",
        tags: ["HTML", "Node.js", "CSS"],
        description:
          "A web application built to log IP addresses, perform ping requests, and provide real-time feedback on network connectivity status to users.",
        features: [
          "Automated IP logging and history tracking for quick reference",
          "Real-time ping execution with instant connection feedback",
          "Interactive dashboard displaying live network status",
          "Error detection and visual indicators for failed connections",
        ],
        technologies: ["Node.js and Express backend"],

        githubLink: "https://github.com/simplyMeister",
      },
      {
        id: 2,
        title: "Eco-Tech Web-App",
        image: "/ecotech.png",
        tags: ["HTML", "CSS", "JS"],
        description:
          "A personal project focused on leveraging technology to promote environmental sustainability. Ecotech explores innovative digital solutions to reduce ecological impact, raise awareness, and encourage eco-friendly practices through interactive, user-centered platforms.",
        features: [
          "Interactive eco-tools to track and reduce environmental impact",
          "Educational resources promoting sustainable practices and awareness",
          "User-driven platform fostering community engagement and collaboration",
        ],
        technologies: ["HTML,CSS,JS"],

        githubLink: "https://github.com/simplyMeister",
      },
      {
        id: 3,
        title: "ICOC ikorodu",
        image: "/Ikorodu.png",
        tags: ["HTML", "JS", "Paystack"],
        description:
          "A church website designed to showcase the organization's mission, vision, and activities, while facilitating seamless tithe contributions and enhancing engagement across multiple locations.",
        features: [
          "Real-time user activity data",
          "total financial contributions",
          "Interactive data visualizations",
          "Paystack integration for seamless payments",
        ],
        technologies: ["Financial APIs integration", "HTML,CSS,JS"],
        githubLink: "https://github.com/simplyMeister",
      },
      {
        id: 4,
        title: "Portfolio Page",
        image: "/portfolio.png",
        tags: ["TailwindCss", "HTML", "JS", "CSS"],
        description:
          "A personal website designed to showcase Buchi Onyeachonam's capabilities as a Frontend Developer, highlighting technical skills, projects, and professional experience.",
        features: [
          "Showcase of Projects worked on",
          "Feedback from clients",
          "toggle display for dark mode(header section)",
        ],
        technologies: [
          "Figma for design and prototyping",
          "Regular HTML implementation",
          "TailwindCSSS for styling",
        ],

        githubLink: "https://github.com/simplyMeister",
      },
      {
        id: 5,
        title: "tindog",
        image: "/tindog.png",
        tags: ["HTML", "CSS"],
        description:
          "A fun, interactive platform where dogs can find their perfect playmate or furry soulmate. Pet owners can create profiles for their dogs, matching them with nearby pups based on personality and interests. Let your dog’s love life begin with Tindog!",
        features: ["Price List for Dog availability ", "test Project"],
        technologies: ["Basic HTML AND CSS"],
        githubLink: "https://github.com/simplyMeister",
      },
      {
        id: 6,
        title: "FAQ",
        image: "/FAQ.png",
        tags: ["JavaScript", "HTML", "CSS"],
        description: "A Frequantly Asked Questions Page from Frontend Mentors",
        features: ["Frequently Asked Questions"],
        technologies: [
          "HTML & CSS for frontend development",
          "JavaScript for Dropdown menu",
        ],
        githubLink: "https://github.com/simplyMeister",
      },
    ];
    viewProjectButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const projectId = parseInt(button.getAttribute("data-project"));
        const project = projectData.find((p) => p.id === projectId);
        if (project) {
          document.getElementById("modal-image").src = project.image;
          document.getElementById("modal-title").textContent = project.title;
          const tagsContainer = document.getElementById("modal-tags");
          tagsContainer.innerHTML = "";
          project.tags.forEach((tag) => {
            const tagElement = document.createElement("span");
            tagElement.className =
              "bg-gray-100 text-gray-600 px-2 py-1 !rounded-sm text-sm";
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
          });
          document.getElementById("modal-description").textContent =
            project.description;
          const featuresContainer = document.getElementById("modal-features");
          featuresContainer.innerHTML = "";
          project.features.forEach((feature) => {
            const li = document.createElement("li");
            li.className = "flex items-start gap-2";
            li.innerHTML = `<i class="ri-check-line text-primary w-5 h-5 flex items-center justify-center mt-0.5"></i><span>${feature}</span>`;
            featuresContainer.appendChild(li);
          });
          const techContainer = document.getElementById("modal-technologies");
          techContainer.innerHTML = "";
          project.technologies.forEach((tech) => {
            const li = document.createElement("li");
            li.className = "flex items-start gap-2";
            li.innerHTML = `<i class="ri-arrow-right-s-line text-primary w-5 h-5 flex items-center justify-center mt-0.5"></i><span>${tech}</span>`;
            techContainer.appendChild(li);
          });
          document.getElementById("modal-live-link").href = project.liveLink;
          document.getElementById("modal-github-link").href =
            project.githubLink;
          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
    // Contact form validation
    //const contactForm = document.getElementById("contact-form");
    // contactForm.addEventListener("submit", (e) => {
    // e.preventDefault();
    // const name = document.getElementById("name").value;
    //const email = document.getElementById("email").value;
    //const subject = document.getElementById("subject").value;
    //const message = document.getElementById("message").value;
    // Simple validation
    //if (name && email && subject && message) {
    // Simulate form submission
    // alert("Thank you for your message! I will get back to you soon.");
    //contactForm.reset();
    //  } else {
    //  alert("Please fill in all fields.");
    // }
    // });
    // Initialize EmailJS with your Public Key
    (function () {
      emailjs.init("CSyatSK3w6VsC3FGn"); // Replace with your actual Public Key
    })();

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Find submit button
      const submitButton =
        contactForm.querySelector('button[type="submit"]') ||
        contactForm.querySelector('input[type="submit"]');

      // Store original button state
      const originalButtonText = submitButton
        ? submitButton.tagName === "INPUT"
          ? submitButton.value
          : submitButton.textContent
        : "Send";

      // Disable button
      if (submitButton) {
        submitButton.disabled = true;
        if (submitButton.tagName === "INPUT") {
          submitButton.value = "Sending...";
        } else {
          submitButton.textContent = "Sending...";
        }
      }

      // Prepare template parameters
      const templateParams = {
        name: name,
        email: email,
        title: subject,
        message: message,
        to_email: "buchionyeachonam82@gmail.com", // Explicitly set recipient email
      };

      console.log("Sending with parameters:", templateParams);

      // Send email
      emailjs
        .send("service_iq4yars", "template_6whij08", templateParams)
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for your message! I will get back to you soon.");
          contactForm.reset();
        })
        .catch(function (error) {
          console.error("FAILED...", error);
          alert(
            "Error: " +
              (error.text ||
                "Problem sending your message. Please try again later.")
          );
        })
        .finally(function () {
          // Restore button
          if (submitButton) {
            submitButton.disabled = false;
            if (submitButton.tagName === "INPUT") {
              submitButton.value = originalButtonText;
            } else {
              submitButton.textContent = originalButtonText;
            }
          }
        });
    });

    // Typed text effect
    const typedTextElement = document.querySelector(".typed-text");
    const phrases = [
      "Junior Frontend Developer",
      " Upcoming UI/UX Designer",
      "Creative Problem Solver",
      "Team Builder",
      "Saxophonist",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50;
    function typeText() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typedTextElement.textContent = currentPhrase.substring(
          0,
          charIndex - 1
        );
        charIndex--;
        typingSpeed = 50;
      } else {
        typedTextElement.textContent = currentPhrase.substring(
          0,
          charIndex + 1
        );
        charIndex++;
        typingSpeed = 100;
      }
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of phrase
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
      }
      setTimeout(typeText, typingSpeed);
    }
    setTimeout(typeText, 1000);
    // Skills chart code with legend below on mobile devices
    const skillsChart = echarts.init(document.getElementById("skills-chart"));

    // Function to dynamically set legend orientation based on screen width
    function getResponsiveLegendOptions() {
      if (window.innerWidth < 768) {
        // Mobile devices
        return {
          orient: "horizontal",
          bottom: -5,
          left: "center",
          textStyle: {
            color: "#1f2937",
            fontSize: 10,
          },
          itemWidth: 12,
          itemHeight: 10,
          itemGap: 8,
          padding: [0, 0, 0, 0],
        };
      } else {
        // Larger devices
        return {
          orient: "vertical",
          right: 10,
          top: "center",
          textStyle: {
            color: "#1f2937",
          },
        };
      }
    }

    const updateChartOptions = () => {
      const isMobile = window.innerWidth < 768;

      const skillsOption = {
        animation: false,
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderColor: "#eee",
          borderWidth: 1,
          textStyle: {
            color: "#1f2937",
          },
        },
        legend: getResponsiveLegendOptions(),
        grid: {
          bottom: isMobile ? 40 : 0,
        },
        series: [
          {
            name: "Skills",
            type: "pie",
            radius: isMobile ? ["35%", "60%"] : ["40%", "70%"],
            center: isMobile ? ["50%", "35%"] : ["50%", "50%"], // Move chart up further on mobile for legend space
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 8,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: isMobile ? "12" : "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 45,
                name: "Frontend Development",
                itemStyle: { color: "#D4AF37" },
              },
              {
                value: 25,
                name: "UI/UX Design",
                itemStyle: { color: "#F5DEB3" },
              },
              {
                value: 20,
                name: "JavaScript Frameworks",
                itemStyle: { color: "#FFD700" },
              },
              {
                value: 10,
                name: "Backend Integration",
                itemStyle: { color: "#DAA520" },
              },
            ],
          },
        ],
      };

      skillsChart.setOption(skillsOption);
    };

    // Initial render
    updateChartOptions();

    // Resize chart when window size changes and update responsive options
    window.addEventListener("resize", function () {
      skillsChart.resize();
      updateChartOptions();
    });

    // Add this to handle container resize for better responsiveness
    const resizeObserver = new ResizeObserver(() => {
      skillsChart.resize();
    });
    resizeObserver.observe(document.getElementById("skills-chart"));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          });
          // Close mobile menu if open
          if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }
        }
      });
    });
  });
});
