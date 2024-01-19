const attd_status = {
  Present: "Present",
  Absent: "Absent",
};

const filterByOption = {
  halfYearly: "halfYearly",
  monthly: "monthly",
  quarterly: "quarterly",
  yearly: "yearly",
  daily: "daily",
  weekly: "weekly",
};

const jobStatus = {
  completed: "Completed",
  pending: "Pending",
  inProgress: "In Progress",
  closed: "close",
  Open: "open",
  started: "Job Started",
  notStarted: "Not Started",
  paused: "Job Paused",
  submitted: "Job Submitted",
};

const priority = {
  low: "low",
  medium: "medium",
  high: "high",
  critical: "critical",
  inProgress: "In Progress",
};

const roles = {
  admin: "admin",
  technician: "technician",
  bial: "bial",
  bluestar: "bluestar",
  supervisor: "supervisor",
};

module.exports = { attd_status, filterByOption, jobStatus, priority, roles };
