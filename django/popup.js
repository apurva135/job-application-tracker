document.getElementById("jobForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const jobTitle = document.getElementById("jobTitle").value;
    const company = document.getElementById("company").value;
    const applyDate = document.getElementById("applyDate").value;
  
    const application = {
      jobTitle,
      company,
      applyDate,
      timestamp: new Date().toISOString()
    };
  
    chrome.storage.local.get({ jobs: [] }, function (result) {
      const updatedJobs = [...result.jobs, application];
      chrome.storage.local.set({ jobs: updatedJobs }, function () {
        alert("✅ Job saved successfully!");
      });
    });
  });