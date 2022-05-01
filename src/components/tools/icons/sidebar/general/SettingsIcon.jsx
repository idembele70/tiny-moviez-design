import React from "react";
import PropTypes from "prop-types";

const SettingsIcon = ({ selected }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.415 3.83878C14.7095 0.0537398 9.2905 0.0537401 8.58499 3.83878C8.41886 4.73006 7.49808 5.26091 6.64603 4.96004C3.01257 3.67704 0.312178 8.37772 3.23044 10.8784C3.91803 11.4676 3.91803 12.5324 3.23044 13.1216C0.312178 15.6223 3.01257 20.323 6.64603 19.04C7.49808 18.7391 8.41886 19.2699 8.58499 20.1612C9.2905 23.9463 14.7095 23.9463 15.415 20.1612C15.5811 19.2699 16.5019 18.7391 17.354 19.04C20.9874 20.323 23.6878 15.6223 20.7696 13.1216C20.082 12.5324 20.082 11.4676 20.7696 10.8784C23.6878 8.37772 20.9874 3.67704 17.354 4.96004C16.5019 5.26091 15.5811 4.73006 15.415 3.83878Z"
      stroke={selected ? "#00B9AE" : "#F9F9F9"}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle
      r="3"
      transform="matrix(-1 0 0 1 12 12)"
      stroke={selected ? "#00B9AE" : "#F9F9F9"}
      strokeWidth="2"
    />
  </svg>
);

SettingsIcon.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default SettingsIcon;
