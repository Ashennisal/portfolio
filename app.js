(function () {
  "use strict";

  var grid = document.getElementById("project-grid");
  var errEl = document.getElementById("projects-error");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  /** Visitors can’t open your machine’s localhost; disable Live until you deploy a public URL. */
  function publicHref(href) {
    if (!href || !String(href).trim()) return "";
    var h = String(href).trim().toLowerCase();
    if (h.indexOf("localhost") !== -1 || h.indexOf("127.0.0.1") !== -1) return "";
    return String(href).trim();
  }

  function linkButton(href, label, variant) {
    var v = variant === "ghost" ? "ghost" : "primary";
    var cls = v === "ghost" ? "btn btn-ghost" : "btn btn-primary";
    if (!href || !String(href).trim()) {
      return '<span class="' + cls + '" aria-disabled="true">' + esc(label) + "</span>";
    }
    return (
      '<a class="' +
      cls +
      '" href="' +
      esc(href) +
      '" rel="noopener noreferrer" target="_blank">' +
      esc(label) +
      "</a>"
    );
  }

  function renderCard(p) {
    var tags = Array.isArray(p.tags) ? p.tags : [];
    var tagsHtml = tags
      .map(function (t) {
        return "<li>" + esc(String(t)) + "</li>";
      })
      .join("");

    var img = "";
    if (p.image && String(p.image).trim()) {
      var altTxt = p.imageAlt ? String(p.imageAlt) : String(p.title || "Project");
      img =
        '<img class="project-thumb" src="' +
        esc(p.image) +
        '" alt="' +
        esc(altTxt) +
        '" loading="lazy" />';
    }

    return (
      '<article class="project-card">' +
      img +
      "<h3>" +
      esc(p.title || "Untitled") +
      "</h3>" +
      '<p class="project-desc">' +
      esc(p.description || "") +
      "</p>" +
      (tagsHtml ? '<ul class="project-tags">' + tagsHtml + "</ul>" : "") +
      '<div class="project-actions">' +
      linkButton(publicHref(p.liveUrl), "Live", "primary") +
      linkButton(p.repoUrl, "Code", "ghost") +
      "</div></article>"
    );
  }

  function showError(msg) {
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.remove("hidden");
    }
  }

  function sortProjects(list) {
    if (!Array.isArray(list)) return [];
    return list.slice().sort(function (a, b) {
      var af = a.featured ? 1 : 0;
      var bf = b.featured ? 1 : 0;
      if (bf !== af) return bf - af;
      var ao = typeof a.sortOrder === "number" ? a.sortOrder : 1000;
      var bo = typeof b.sortOrder === "number" ? b.sortOrder : 1000;
      if (ao !== bo) return ao - bo;
      return 0;
    });
  }

  function renderProjects(data) {
    if (!grid) return;
    errEl && errEl.classList.add("hidden");
    if (!Array.isArray(data) || data.length === 0) {
      showError("No projects yet — add entries to projects.js.");
      grid.innerHTML = "";
      return;
    }
    grid.innerHTML = data.map(renderCard).join("");
  }

  function loadProjects() {
    if (typeof window.PORTFOLIO_PROJECTS !== "undefined") {
      renderProjects(sortProjects(window.PORTFOLIO_PROJECTS));
      return;
    }
    showError("projects.js did not load. Check the script tag order in index.html.");
  }

  function defaultSite() {
    return {
      name: "Your Name",
      tagline: "Here’s everything I’ve shipped.",
      heroEyebrow: "Hello — I build things for the web",
      heroLead: "Edit content.js to personalize this site.",
      about: { paragraphs: ["Add your story in content.js."] },
      skills: [],
      experience: [],
      cvUrl: "",
      contact: {
        email: "you@example.com",
        intro: "Reach out anytime.",
        social: [
          { label: "GitHub", href: "https://github.com/" },
          { label: "LinkedIn", href: "https://linkedin.com/" },
        ],
      },
    };
  }

  function renderSite() {
    var site = typeof window.PORTFOLIO_SITE !== "undefined" ? window.PORTFOLIO_SITE : defaultSite();

    var eyebrow = document.getElementById("hero-eyebrow");
    var nameEl = document.getElementById("hero-name");
    var line2 = document.getElementById("hero-line2");
    var lead = document.getElementById("hero-lead");
    var footerName = document.getElementById("footer-name");

    if (eyebrow) eyebrow.textContent = site.heroEyebrow || "";
    if (nameEl) nameEl.textContent = site.name || "Your Name";
    if (line2) line2.textContent = site.tagline || "";
    if (lead) lead.textContent = site.heroLead || "";
    if (footerName) footerName.textContent = site.name || "Your Name";

    var cvSlot = document.getElementById("hero-cv-slot");
    var cvUrl = site.cvUrl && String(site.cvUrl).trim() ? String(site.cvUrl).trim() : "";
    if (cvSlot) {
      cvSlot.innerHTML = cvUrl ?
        '<a class="btn btn-ghost" href="' +
        esc(cvUrl) +
        '" target="_blank" rel="noopener noreferrer">Résumé (PDF)</a>'
      : "";
    }

    var aboutBody = document.getElementById("about-body");
    if (aboutBody && site.about && Array.isArray(site.about.paragraphs)) {
      aboutBody.innerHTML = site.about.paragraphs
        .map(function (p) {
          return "<p>" + esc(String(p)) + "</p>";
        })
        .join("");
    }

    var skillsRoot = document.getElementById("skills-grid");
    if (skillsRoot && Array.isArray(site.skills)) {
      if (site.skills.length === 0) {
        skillsRoot.innerHTML = "<p class=\"section-intro\">Add skill groups in content.js.</p>";
      } else {
        skillsRoot.innerHTML = site.skills
          .map(function (cat) {
            var items = Array.isArray(cat.items) ? cat.items : [];
            var lis = items
              .map(function (it) {
                return "<li>" + esc(String(it)) + "</li>";
              })
              .join("");
            return (
              '<div class="skill-category">' +
              "<h3>" +
              esc(cat.label || "Skills") +
              "</h3>" +
              '<ul class="skill-pills">' +
              lis +
              "</ul></div>"
            );
          })
          .join("");
      }
    }

    var expRoot = document.getElementById("experience-list");
    if (expRoot && Array.isArray(site.experience)) {
      if (site.experience.length === 0) {
        expRoot.innerHTML =
          "<p class=\"section-intro\">Add roles in content.js under <code>experience</code>.</p>";
      } else {
        expRoot.innerHTML = site.experience
          .map(function (job) {
            var highs = Array.isArray(job.highlights) ? job.highlights : [];
            var bullets =
              highs.length > 0
                ? "<ul>" +
                  highs
                    .map(function (h) {
                      return "<li>" + esc(String(h)) + "</li>";
                    })
                    .join("") +
                  "</ul>"
                : "";
            return (
              '<article class="experience-card">' +
              '<header class="experience-card-head">' +
              "<div>" +
              '<p class="experience-role">' +
              esc(job.role || "") +
              "</p>" +
              '<p class="experience-org">' +
              esc(job.org || "") +
              "</p>" +
              "</div>" +
              '<p class="experience-period">' +
              esc(job.period || "") +
              "</p>" +
              "</header>" +
              (job.summary ? '<p class="experience-summary">' + esc(String(job.summary)) + "</p>" : "") +
              bullets +
              "</article>"
            );
          })
          .join("");
      }
    }

    var contactBody = document.getElementById("contact-body");
    if (contactBody && site.contact) {
      var c = site.contact;
      var email = c.email || "";
      var intro = c.intro ? "<p>" + esc(String(c.intro)) + "</p>" : "";
      var siteCv = typeof site.cvUrl !== "undefined" && site.cvUrl && String(site.cvUrl).trim();
      var cvLine =
        siteCv ?
          "<p>Résumé: <a href=\"" +
          esc(String(site.cvUrl).trim()) +
          "\" target=\"_blank\" rel=\"noopener noreferrer\">Download PDF</a></p>"
        : "";
      var mail =
        email ?
          "<p>Email: <a href=\"mailto:" + esc(email) + "\">" + esc(email) + "</a></p>"
        : "";
      var social = Array.isArray(c.social) ? c.social : [];
      var socialHtml =
        social.length > 0 ?
          "<ul class=\"social\">" +
          social
            .map(function (s) {
              return (
                "<li><a href=\"" +
                esc(s.href || "#") +
                "\" rel=\"noopener noreferrer\" target=\"_blank\">" +
                esc(s.label || "Link") +
                "</a></li>"
              );
            })
            .join("") +
          "</ul>"
        : "";
      contactBody.innerHTML = intro + cvLine + mail + socialHtml;
    }

    if (site.name) {
      document.title = "Portfolio — " + site.name;
    }
  }

  renderSite();
  loadProjects();
})();
