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
  supervisor: "Supervisor",
  manager: "Manager",
};

const temperatureLogsTitle = {
  LOG_DOM: "PTB TEMPERATURE MONITORING LOG-DOM",

  LOG_INTL: "PTB TEMPERATURE MONITORING LOG-INTL",

  Domestic_Telecom: "Domestic Telecom Room Temperature",

  International_Telecom: "International Telecom Room Temperature",

  Daily_Chiller: "Daily Chiller Log Book - Centrifugal Chillers - 19XRA6/7",

  Daily_Report: "CWP, CT, ATCS, CD, VD & PET Daily Report",
};

module.exports = {
  attd_status,
  filterByOption,
  jobStatus,
  priority,
  roles,
  temperatureLogsTitle,
};
