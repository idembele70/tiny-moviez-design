import React from "react";
import PropTypes from "prop-types";

const DownloadedIcon = ({ selected }) => (
  <svg
    width="24"
    height="22"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 10L12 15M12 15L7 10M12 15L12 1"
      stroke={selected ? "#00B9AE" : "#F9F9F9"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.296C5 4.62866 4.36871 4.13099 3.74865 4.37771C0.806956 5.54824 0 7.98146 0 12.7057C0 20.3595 2.118 21.9999 12 21.9999C21.882 21.9999 24 20.3595 24 12.7057C24 7.98146 23.193 5.54824 20.2513 4.37771C19.6313 4.13099 19 4.62866 19 5.296V5.296C19 5.74846 19.3009 6.13662 19.714 6.32119C20.0273 6.46119 20.2776 6.61212 20.4811 6.7697C21.4189 7.49607 22 8.88206 22 12.7057C22 16.5294 21.4189 17.9154 20.4811 18.6418C19.9576 19.0472 19.1238 19.4087 17.7047 19.653C16.2861 19.8972 14.436 19.9999 12 19.9999C9.56404 19.9999 7.71385 19.8972 6.2953 19.653C4.87622 19.4087 4.04241 19.0472 3.51891 18.6418C2.58107 17.9154 2 16.5294 2 12.7057C2 8.88206 2.58107 7.49607 3.51891 6.7697C3.72237 6.61212 3.97269 6.46119 4.28602 6.32119C4.69912 6.13662 5 5.74846 5 5.296V5.296Z"
      fill={selected ? "#00B9AE" : "#F9F9F9"}
    />
  </svg>
);

DownloadedIcon.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default DownloadedIcon;
