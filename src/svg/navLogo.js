import React from "react"
import styled from "styled-components"
import breakpoints from "../components/breakpoints"

const NavLogo = () => (
  // switch between logos depending on if browser is mobile or tablet.
  // this is because when using the logo with "college of eastern medicine", the text underneath "Eight Branches" becomes too small to read. 
  <>
    <Desktop
      width="266"
      height="109"
      viewBox="0 0 266 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.9196 82.7405C36.873 86.803 30.7842 89.1467 24.3551 89.1467C12.1775 89.1467 2.26911 80.514 2.26911 69.9282C2.26911 57.3502 9.94626 50.7097 24.3551 50.7097C39.8985 50.7097 46.4411 55.0065 46.4411 65.2798V74.811C28.8555 74.6938 23.6744 70.7485 23.6744 58.4049V40.7098C23.6744 28.3662 28.9689 24.4209 46.4411 24.3037V31.5302C46.4411 43.8738 40.5792 48.405 24.3551 48.405C9.79498 48.405 2.26911 41.7644 2.26911 29.1865C2.26911 18.6788 12.1775 9.96793 24.3551 9.96793C30.6708 9.96793 36.873 12.4288 40.9196 16.4913L42.508 14.8507C38.0076 10.3195 31.3515 7.62421 24.3551 7.62421C11.043 7.62421 0 17.2725 0 29.1865C0 43.1707 8.58479 50.7487 24.3551 50.7487C41.7138 50.7487 48.7102 45.28 48.7102 31.5302V21.96C28.2882 21.8428 21.4053 26.2568 21.4053 40.7098V58.4049C21.4053 72.8578 28.2882 77.2719 48.7102 77.1547V65.2798C48.7102 53.5221 41.033 48.405 24.3551 48.405C8.69825 48.405 0 56.0612 0 69.9282C0 81.8031 10.9295 91.4904 24.3551 91.4904C31.3515 91.4904 38.0076 88.9124 42.508 84.3812L40.9196 82.7405Z"
        fill="black"
      />
      <path
        d="M84.7767 34.8535C83.5882 40.021 81.1594 42.5531 76.9737 42.5531H68.344C66.432 42.5531 65.6052 41.6746 65.6052 39.2976V26.9989H72.9948C76.7154 26.9989 77.2321 28.6008 77.3355 31.8563H78.0589V20.7462H77.3355C77.2321 24.0534 76.7154 25.552 72.9948 25.552H65.6052V10.9279H76.3536C80.5393 10.9279 82.9681 13.46 84.1566 18.5758H84.88L83.4848 9.48099H57.1822V10.2044C60.2827 10.3595 61.8846 10.9279 61.8846 14.1318V39.2976C61.8846 42.6048 60.2827 43.1215 57.1822 43.2765V44H84.1049L85.5001 34.8535H84.7767ZM93.3762 13.615C94.8747 13.615 96.0116 12.4782 96.0116 10.9796C96.0116 9.48099 94.8747 8.29246 93.3762 8.29246C91.7742 8.29246 90.534 9.48099 90.534 10.9796C90.534 12.4782 91.7742 13.615 93.3762 13.615ZM95.3915 40.2277V17.3873H94.668L88.0536 19.2476V19.971H89.3972C91.3092 20.0744 92.0843 20.8495 92.0843 22.6582V40.2277C92.0843 42.5531 90.2757 42.9665 88.4154 43.2765V44H99.0088V43.2765C97.2001 42.9665 95.3915 42.5531 95.3915 40.2277ZM116.649 40.6411L108.484 40.1244C105.797 39.9693 104.867 38.3157 104.867 37.1789C104.867 36.1454 105.487 34.9052 106.624 33.975C108.226 34.8018 110.086 35.2152 112.102 35.2152C118.148 35.2152 122.282 31.5463 122.282 26.3788C122.282 23.5883 121.093 21.2629 119.078 19.661H124.4V18.2141H116.546C115.202 17.6973 113.703 17.439 112.102 17.439C106.056 17.439 101.973 21.1596 101.973 26.3788C101.973 29.5826 103.523 32.1147 106.004 33.6133C103.834 34.8535 102.697 36.7655 102.697 38.6775C102.697 40.0727 103.368 41.5196 105.229 42.3981C103.11 43.2249 100.371 45.1885 100.371 48.7541C100.371 52.4231 104.66 54.9551 111.171 54.9551C119.078 54.9551 124.555 51.958 124.555 46.9455C124.555 42.6048 121.248 40.9512 116.649 40.6411ZM111.74 18.9375C115.822 18.9375 118.613 22.3481 118.613 27.1539C118.613 31.0295 116.132 33.7683 112.463 33.7683C108.433 33.7683 105.59 30.4094 105.59 25.6036C105.59 21.6247 108.123 18.9375 111.74 18.9375ZM112.412 53.6116C107.192 53.6116 103.472 51.1312 103.472 47.3072C103.472 44.9302 105.074 43.5866 106.107 42.7081C106.727 42.9148 107.451 43.0698 108.329 43.1215L116.287 43.6383C120.835 44 122.127 45.9637 122.127 48.1857C122.127 51.4412 117.837 53.6116 112.412 53.6116ZM149.788 40.2277V25.1386C149.788 20.1778 147.153 17.439 142.709 17.439C139.143 17.439 136.404 19.4543 133.51 23.3299V7.62068H132.787L126.173 9.48099V10.2044L127.568 10.2561C129.428 10.3078 130.203 11.0829 130.203 12.8916V40.2277C130.203 42.5531 128.395 42.9665 126.534 43.2765V44H137.179V43.2765C135.319 42.9665 133.51 42.5531 133.51 40.2277V24.5701C136.353 21.2629 138.678 19.9194 141.417 19.9194C144.569 19.9194 146.481 21.9347 146.481 25.3453V40.2277C146.481 42.5531 144.672 42.9665 142.812 43.2765V44H153.405V43.2765C151.597 42.9665 149.788 42.5531 149.788 40.2277ZM168.197 19.661V18.2141H160.446V12.8916H159.722L154.296 18.9375V19.661H157.087V38.0574C157.087 42.3464 159.257 44.7751 162.823 44.7751C166.078 44.7751 167.68 42.7598 168.197 41.3646L167.835 41.1579C167.163 41.8296 166.388 42.6048 164.476 42.6048C161.841 42.6048 160.446 40.8995 160.446 37.954V19.661H168.197ZM57.1822 92H73.6149C81.2111 92 85.8102 88.4861 85.8102 82.7501C85.8102 78.0477 81.8312 74.5855 75.1651 73.862C80.3326 72.9835 83.3815 69.883 83.3815 65.6457C83.3815 60.5298 78.8341 57.481 71.2895 57.481H57.1822V58.2044C60.2827 58.3595 61.8846 58.9279 61.8846 62.1318V87.2976C61.8846 90.6048 60.2827 91.1215 57.1822 91.2765V92ZM65.6052 73.3453V58.9279H70.3593C75.9402 58.9279 79.2991 61.46 79.2991 65.6973C79.2991 70.5031 76.3536 73.3453 71.4445 73.3453H65.6052ZM70.2043 90.5531C66.7421 90.5531 65.6052 89.3646 65.6052 87.1942V74.7922H71.4962C77.9556 74.7922 81.6762 77.8927 81.6762 82.7501C81.6762 87.5043 78.3173 90.5531 72.9948 90.5531H70.2043ZM102.728 65.439C99.886 65.439 97.3023 67.7643 95.442 72.4151V65.439H94.7185L88.1041 67.2993V68.0227H89.4476C91.3596 68.1261 92.1348 68.9012 92.1348 70.7098V88.1244C92.1348 90.5014 90.2744 90.9665 88.2591 91.2765V92H100.661V91.2765C97.2506 90.9665 95.442 90.5014 95.442 88.1244V73.9137C97.0956 70.4515 99.576 68.6945 102.108 68.6945C102.987 68.6945 103.813 68.8495 104.537 69.2629L104.795 65.904C104.072 65.594 103.4 65.439 102.728 65.439ZM127.399 90.1397C125.539 90.088 124.712 89.3646 124.712 87.5043V74.6888C124.712 69.0046 121.25 65.439 115.824 65.439C108.951 65.439 104.3 70.7615 106.987 75.9807L110.295 74.7405C108.538 70.9682 110.76 66.8859 114.945 66.8859C118.976 66.8859 121.405 69.8314 121.405 74.6888V76.3424L116.961 77.2209C109.003 78.7195 105.954 81.0965 105.954 86.0574C105.954 90.0363 108.693 92.7751 112.672 92.7751C116.496 92.7751 119.854 90.1914 121.405 85.954V92.7751H122.128L128.743 90.9148V90.1914L127.399 90.1397ZM121.405 84.6105C119.906 87.9693 117.167 90.243 114.274 90.243C111.431 90.243 109.468 88.021 109.468 85.0755C109.468 81.5616 111.793 79.7013 117.116 78.6678L121.405 77.7893V84.6105ZM153.484 88.2277V73.1386C153.484 68.1778 150.849 65.439 146.456 65.439C142.787 65.439 140.049 67.5576 137.103 71.5366V65.439H136.38L129.765 67.2993V68.0227H131.109C133.021 68.1261 133.796 68.9012 133.796 70.7098V88.2277C133.796 90.5531 131.987 90.9665 130.127 91.2765V92H140.72V91.2765C138.912 90.9665 137.103 90.5531 137.103 88.2277V72.7252C140.049 69.2629 142.322 67.9194 145.164 67.9194C148.265 67.9194 150.177 69.9347 150.177 73.3453V88.2277C150.177 90.5531 148.368 90.9665 146.56 91.2765V92H157.153V91.2765C155.293 90.9665 153.484 90.5531 153.484 88.2277ZM169.52 92.7235C174.532 92.7235 178.046 89.5713 179.544 84.5588L178.924 84.3521C176.961 87.8143 174.067 89.5196 170.915 89.5196C165.075 89.5196 161.51 84.3521 161.51 77.4276C161.51 71.3299 164.714 66.8859 169.416 66.8859C173.137 66.8859 174.842 70.1414 175.41 72.7252L178.769 71.5366C178.253 68.6428 174.945 65.439 170.088 65.439C162.75 65.439 158.048 71.4333 158.048 79.4946C158.048 86.9875 162.75 92.7235 169.52 92.7235ZM203.914 88.2277V73.1386C203.914 68.1778 201.278 65.439 196.834 65.439C193.269 65.439 190.53 67.4543 187.636 71.3299V55.6207H186.913L180.298 57.481V58.2044L181.693 58.2561C183.554 58.3078 184.329 59.0829 184.329 60.8916V88.2277C184.329 90.5531 182.52 90.9665 180.66 91.2765V92H191.305V91.2765C189.445 90.9665 187.636 90.5531 187.636 88.2277V72.5701C190.478 69.2629 192.804 67.9194 195.542 67.9194C198.695 67.9194 200.607 69.9347 200.607 73.3453V88.2277C200.607 90.5531 198.798 90.9665 196.938 91.2765V92H207.531V91.2765C205.722 90.9665 203.914 90.5531 203.914 88.2277ZM229.418 85.0755C227.919 87.3492 225.594 89.5713 221.718 89.5713C215.776 89.5713 211.745 85.0239 211.952 77.9444C211.952 77.531 212.003 77.1692 212.003 76.7558H229.935C229.935 70.1931 226.369 65.439 220.426 65.439C213.347 65.439 208.489 71.2266 208.489 79.6496C208.489 87.1425 212.934 92.7235 219.91 92.7235C224.819 92.7235 228.694 89.5713 229.986 85.3339L229.418 85.0755ZM219.703 66.8859C223.579 66.8859 226.007 70.8649 226.111 75.3089H212.21C213.037 70.3481 215.827 66.8859 219.703 66.8859ZM242.999 92.7235C248.321 92.7235 251.99 89.4679 251.887 84.7655C251.629 75.5673 236.694 78.2544 236.694 71.3299C236.694 68.7462 238.865 66.8859 242.172 66.8859C244.911 66.8859 247.339 68.9529 248.321 71.95L251.37 70.5031C250.233 67.4543 246.564 65.439 242.379 65.439C237.211 65.439 233.749 68.3328 233.852 72.6735C234.007 81.5099 248.89 78.6161 248.993 86.3157C248.993 89.2612 246.616 91.2765 243.154 91.2765C239.95 91.2765 237.159 88.8995 236.436 85.2306L233.077 86.7291C234.524 90.2947 238.555 92.7235 242.999 92.7235Z"
        fill="black"
      />
      <path
        d="M60.8934 108.193C60.3023 108.193 59.7535 108.063 59.247 107.803C58.7469 107.537 58.3442 107.144 58.0389 106.624C57.7337 106.098 57.5811 105.458 57.5811 104.705C57.5811 103.958 57.7337 103.322 58.0389 102.795C58.3442 102.269 58.7469 101.876 59.247 101.617C59.7535 101.35 60.3023 101.217 60.8934 101.217C61.6338 101.217 62.2605 101.412 62.7736 101.802C63.2931 102.185 63.6244 102.708 63.7673 103.37L62.8905 103.565C62.7801 103.072 62.5495 102.688 62.1988 102.416C61.8546 102.143 61.4162 102.006 60.8836 102.006C60.416 102.006 60.0003 102.114 59.6366 102.328C59.2794 102.536 59.0002 102.844 58.7988 103.253C58.5975 103.656 58.4968 104.14 58.4968 104.705C58.4968 105.27 58.5975 105.757 58.7988 106.166C59.0002 106.569 59.2794 106.874 59.6366 107.082C60.0003 107.29 60.416 107.394 60.8836 107.394C61.4097 107.394 61.8416 107.264 62.1793 107.004C62.5235 106.744 62.7573 106.377 62.8807 105.903L63.7673 106.088C63.5919 106.738 63.2509 107.251 62.7443 107.628C62.2378 108.004 61.6208 108.193 60.8934 108.193ZM69.6502 108.193C69.0072 108.193 68.4292 108.043 67.9161 107.744C67.4095 107.446 67.0101 107.033 66.7178 106.507C66.432 105.975 66.2892 105.374 66.2892 104.705C66.2892 104.036 66.432 103.438 66.7178 102.912C67.0101 102.38 67.4095 101.964 67.9161 101.665C68.4292 101.367 69.0072 101.217 69.6502 101.217C70.2866 101.217 70.8582 101.367 71.3648 101.665C71.8778 101.964 72.2773 102.38 72.563 102.912C72.8553 103.438 73.0014 104.036 73.0014 104.705C73.0014 105.374 72.8553 105.975 72.563 106.507C72.2773 107.033 71.8778 107.446 71.3648 107.744C70.8582 108.043 70.2866 108.193 69.6502 108.193ZM67.1952 104.705C67.1952 105.218 67.2991 105.679 67.5069 106.088C67.7212 106.497 68.0135 106.819 68.3837 107.053C68.7539 107.28 69.1728 107.394 69.6404 107.394C70.1145 107.394 70.5367 107.28 70.9069 107.053C71.2771 106.819 71.5661 106.497 71.7739 106.088C71.9882 105.679 72.0954 105.218 72.0954 104.705C72.0954 104.192 71.9882 103.731 71.7739 103.322C71.5661 102.912 71.2738 102.591 70.8971 102.357C70.5269 102.123 70.108 102.006 69.6404 102.006C69.1728 102.006 68.7539 102.123 68.3837 102.357C68.0135 102.591 67.7212 102.912 67.5069 103.322C67.2991 103.731 67.1952 104.192 67.1952 104.705ZM75.8703 101.295H76.7568V107.316H80.1373V108.115H75.8703V101.295ZM82.7422 101.295H83.6288V107.316H87.0092V108.115H82.7422V101.295ZM89.6142 101.295H93.9104V102.084H90.5007V104.091H93.2674V104.89H90.5007V107.316H94.0176V108.115H89.6142V101.295ZM99.5906 108.193C99.0061 108.193 98.4638 108.059 97.9637 107.793C97.4636 107.527 97.0609 107.134 96.7557 106.614C96.4569 106.088 96.3076 105.452 96.3076 104.705C96.3076 103.958 96.4602 103.325 96.7654 102.805C97.0707 102.279 97.4734 101.883 97.9735 101.617C98.48 101.35 99.0256 101.217 99.6101 101.217C100.37 101.217 101.01 101.412 101.529 101.802C102.055 102.191 102.387 102.714 102.523 103.37L101.646 103.555C101.549 103.075 101.318 102.698 100.955 102.425C100.597 102.146 100.149 102.006 99.6101 102.006C99.1425 102.006 98.7301 102.114 98.3729 102.328C98.0157 102.536 97.7332 102.844 97.5253 103.253C97.324 103.656 97.2233 104.14 97.2233 104.705C97.2233 105.27 97.324 105.754 97.5253 106.156C97.7267 106.559 98.0059 106.868 98.3631 107.082C98.7268 107.29 99.1393 107.394 99.6004 107.394C100.016 107.394 100.383 107.309 100.701 107.14C101.019 106.972 101.266 106.735 101.442 106.429C101.617 106.118 101.708 105.764 101.714 105.367H99.3373V104.598H102.552V108.115H101.744V107.063C101.588 107.407 101.312 107.683 100.916 107.891C100.519 108.092 100.078 108.193 99.5906 108.193ZM105.603 101.295H109.9V102.084H106.49V104.091H109.257V104.89H106.49V107.316H110.007V108.115H105.603V101.295ZM120.037 108.193C119.394 108.193 118.816 108.043 118.303 107.744C117.796 107.446 117.397 107.033 117.105 106.507C116.819 105.975 116.676 105.374 116.676 104.705C116.676 104.036 116.819 103.438 117.105 102.912C117.397 102.38 117.796 101.964 118.303 101.665C118.816 101.367 119.394 101.217 120.037 101.217C120.674 101.217 121.245 101.367 121.752 101.665C122.265 101.964 122.664 102.38 122.95 102.912C123.242 103.438 123.388 104.036 123.388 104.705C123.388 105.374 123.242 105.975 122.95 106.507C122.664 107.033 122.265 107.446 121.752 107.744C121.245 108.043 120.674 108.193 120.037 108.193ZM117.582 104.705C117.582 105.218 117.686 105.679 117.894 106.088C118.108 106.497 118.4 106.819 118.771 107.053C119.141 107.28 119.56 107.394 120.027 107.394C120.501 107.394 120.924 107.28 121.294 107.053C121.664 106.819 121.953 106.497 122.161 106.088C122.375 105.679 122.482 105.218 122.482 104.705C122.482 104.192 122.375 103.731 122.161 103.322C121.953 102.912 121.661 102.591 121.284 102.357C120.914 102.123 120.495 102.006 120.027 102.006C119.56 102.006 119.141 102.123 118.771 102.357C118.4 102.591 118.108 102.912 117.894 103.322C117.686 103.731 117.582 104.192 117.582 104.705ZM126.257 101.295H130.622V102.084H127.144V104.169H129.988V104.968H127.144V108.115H126.257V101.295ZM137.575 101.295H141.871V102.084H138.462V104.091H141.228V104.89H138.462V107.316H141.978V108.115H137.575V101.295ZM146.123 105.591H148.548L147.34 102.464L146.123 105.591ZM146.931 101.295H147.74L150.448 108.115H149.523L148.85 106.381H145.821L145.148 108.115H144.233L146.931 101.295ZM155.118 108.193C154.683 108.193 154.28 108.105 153.91 107.93C153.546 107.754 153.241 107.507 152.994 107.189C152.754 106.871 152.598 106.507 152.527 106.098L153.364 105.825C153.429 106.299 153.628 106.683 153.959 106.975C154.29 107.261 154.683 107.403 155.138 107.403C155.605 107.403 155.979 107.303 156.258 107.101C156.537 106.894 156.677 106.621 156.677 106.283C156.677 106.017 156.599 105.803 156.443 105.64C156.294 105.471 156.105 105.341 155.878 105.25C155.651 105.153 155.339 105.046 154.943 104.929C154.469 104.786 154.092 104.653 153.813 104.53C153.533 104.406 153.293 104.221 153.092 103.974C152.897 103.727 152.799 103.403 152.799 103C152.799 102.649 152.897 102.341 153.092 102.075C153.287 101.802 153.559 101.591 153.91 101.441C154.261 101.292 154.657 101.217 155.099 101.217C155.722 101.217 156.255 101.373 156.696 101.685C157.138 101.99 157.401 102.396 157.485 102.903L156.677 103.214C156.605 102.844 156.43 102.552 156.151 102.338C155.878 102.117 155.527 102.006 155.099 102.006C154.663 102.006 154.319 102.097 154.066 102.279C153.819 102.455 153.696 102.695 153.696 103C153.696 103.208 153.761 103.38 153.891 103.516C154.027 103.646 154.196 103.75 154.397 103.828C154.605 103.906 154.887 103.994 155.245 104.091C155.738 104.228 156.141 104.364 156.453 104.5C156.764 104.63 157.031 104.838 157.252 105.124C157.479 105.41 157.593 105.793 157.593 106.273C157.593 106.657 157.489 106.994 157.281 107.287C157.079 107.572 156.79 107.796 156.414 107.959C156.044 108.115 155.612 108.193 155.118 108.193ZM161.873 102.084H159.701V101.295H164.922V102.084H162.76V108.115H161.873V102.084ZM167.536 101.295H171.833V102.084H168.423V104.091H171.19V104.89H168.423V107.316H171.94V108.115H167.536V101.295ZM174.817 101.295H177.272C177.701 101.295 178.078 101.373 178.403 101.529C178.727 101.685 178.977 101.906 179.153 102.191C179.328 102.477 179.416 102.808 179.416 103.185C179.416 103.601 179.302 103.965 179.075 104.276C178.854 104.582 178.545 104.802 178.149 104.939L180.117 108.115H179.075L177.233 105.075H175.704V108.115H174.817V101.295ZM177.175 104.276C177.597 104.276 177.925 104.182 178.159 103.994C178.393 103.799 178.51 103.529 178.51 103.185C178.51 102.841 178.393 102.571 178.159 102.377C177.925 102.182 177.597 102.084 177.175 102.084H175.704V104.276H177.175ZM182.717 101.295H183.701L187.14 106.722V101.295H188.007V108.115H187.023L183.584 102.708V108.115H182.717V101.295ZM195.291 101.295H196.362L198.661 106.829L200.96 101.295H202.032V108.115H201.155V102.971L199.031 108.115H198.291L196.158 102.971V108.115H195.291V101.295ZM205.197 101.295H209.494V102.084H206.084V104.091H208.851V104.89H206.084V107.316H209.601V108.115H205.197V101.295ZM212.478 101.295H214.505C215.148 101.295 215.729 101.428 216.249 101.695C216.768 101.961 217.177 102.354 217.476 102.873C217.775 103.387 217.924 103.997 217.924 104.705C217.924 105.413 217.775 106.027 217.476 106.546C217.177 107.059 216.768 107.449 216.249 107.715C215.729 107.982 215.148 108.115 214.505 108.115H212.478V101.295ZM214.476 107.316C214.937 107.316 215.359 107.225 215.742 107.043C216.125 106.861 216.43 106.575 216.658 106.186C216.892 105.79 217.008 105.296 217.008 104.705C217.008 104.114 216.892 103.624 216.658 103.234C216.43 102.838 216.125 102.549 215.742 102.367C215.359 102.178 214.937 102.084 214.476 102.084H213.355V107.316H214.476ZM220.787 101.295H221.673V108.115H220.787V101.295ZM227.843 108.193C227.252 108.193 226.704 108.063 226.197 107.803C225.697 107.537 225.294 107.144 224.989 106.624C224.684 106.098 224.531 105.458 224.531 104.705C224.531 103.958 224.684 103.322 224.989 102.795C225.294 102.269 225.697 101.876 226.197 101.617C226.704 101.35 227.252 101.217 227.843 101.217C228.584 101.217 229.21 101.412 229.724 101.802C230.243 102.185 230.574 102.708 230.717 103.37L229.84 103.565C229.73 103.072 229.499 102.688 229.149 102.416C228.805 102.143 228.366 102.006 227.834 102.006C227.366 102.006 226.95 102.114 226.587 102.328C226.229 102.536 225.95 102.844 225.749 103.253C225.547 103.656 225.447 104.14 225.447 104.705C225.447 105.27 225.547 105.757 225.749 106.166C225.95 106.569 226.229 106.874 226.587 107.082C226.95 107.29 227.366 107.394 227.834 107.394C228.36 107.394 228.792 107.264 229.129 107.004C229.474 106.744 229.707 106.377 229.831 105.903L230.717 106.088C230.542 106.738 230.201 107.251 229.694 107.628C229.188 108.004 228.571 108.193 227.843 108.193ZM233.437 101.295H234.323V108.115H233.437V101.295ZM237.493 101.295H238.477L241.915 106.722V101.295H242.783V108.115H241.799L238.36 102.708V108.115H237.493V101.295ZM245.963 101.295H250.259V102.084H246.849V104.091H249.616V104.89H246.849V107.316H250.366V108.115H245.963V101.295Z"
        fill="black"
      />
    </Desktop>
    <MobileTablet
      width="283"
      height="106"
      viewBox="0 0 283 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.4906 91.9832C40.9919 96.4994 34.223 99.105 27.0757 99.105C13.5379 99.105 2.52258 89.5079 2.52258 77.7396C2.52258 63.7566 11.0573 56.3742 27.0757 56.3742C44.3554 56.3742 51.6288 61.1511 51.6288 72.572V83.1678C32.0788 83.0375 26.3189 78.6515 26.3189 64.9291V45.2573C26.3189 31.5348 32.205 27.1489 51.6288 27.0186V35.0523C51.6288 48.7748 45.1122 53.8121 27.0757 53.8121C10.8891 53.8121 2.52258 46.4298 2.52258 32.4468C2.52258 20.7653 13.5379 11.0814 27.0757 11.0814C34.0969 11.0814 40.9919 13.8172 45.4906 18.3335L47.2564 16.5096C42.2532 11.4722 34.8537 8.47588 27.0757 8.47588C12.2766 8.47588 0 19.202 0 32.4468C0 47.9931 9.54377 56.4177 27.0757 56.4177C46.3735 56.4177 54.1514 50.3381 54.1514 35.0523V24.413C31.4482 24.2828 23.7964 29.1899 23.7964 45.2573V64.9291C23.7964 80.9965 31.4482 85.9036 54.1514 85.7733V72.572C54.1514 59.5009 45.6167 53.8121 27.0757 53.8121C9.66989 53.8121 0 62.3235 0 77.7396C0 90.941 12.1504 101.71 27.0757 101.71C34.8537 101.71 42.2532 98.8444 47.2564 93.807L45.4906 91.9832Z"
        fill="black"
      />
      <path
        d="M94.2472 38.8318C92.9259 44.5765 90.2259 47.3915 85.5726 47.3915H75.9789C73.8533 47.3915 72.9342 46.4149 72.9342 43.7723V30.0997H81.1492C85.2854 30.0997 85.8599 31.8806 85.9748 35.4998H86.779V23.1486H85.9748C85.8599 26.8252 85.2854 28.4912 81.1492 28.4912H72.9342V12.2335H84.8833C89.5365 12.2335 92.2365 15.0485 93.5578 20.7358H94.3621L92.811 10.625H63.5702V11.4293C67.0171 11.6016 68.7979 12.2335 68.7979 15.7953V43.7723C68.7979 47.4489 67.0171 48.0234 63.5702 48.1957V49H93.5004L95.0515 38.8318H94.2472ZM103.807 15.2208C105.473 15.2208 106.737 13.957 106.737 12.291C106.737 10.625 105.473 9.30372 103.807 9.30372C102.026 9.30372 100.648 10.625 100.648 12.291C100.648 13.957 102.026 15.2208 103.807 15.2208ZM106.048 44.8063V19.4145H105.243L97.8902 21.4826V22.2869H99.3838C101.509 22.4018 102.371 23.2635 102.371 25.2741V44.8063C102.371 47.3915 100.36 47.851 98.2923 48.1957V49H110.069V48.1957C108.058 47.851 106.048 47.3915 106.048 44.8063ZM129.68 45.2659L120.603 44.6914C117.616 44.5191 116.582 42.6808 116.582 41.4169C116.582 40.268 117.271 38.8892 118.535 37.8552C120.316 38.7743 122.384 39.2339 124.624 39.2339C131.346 39.2339 135.942 35.1551 135.942 29.4104C135.942 26.3082 134.62 23.7231 132.38 21.9422H138.297V20.3337H129.565C128.071 19.7592 126.405 19.4719 124.624 19.4719C117.903 19.4719 113.365 23.6082 113.365 29.4104C113.365 32.9721 115.088 35.7871 117.846 37.453C115.433 38.8318 114.169 40.9573 114.169 43.0829C114.169 44.634 114.916 46.2425 116.984 47.2191C114.629 48.1383 111.584 50.3213 111.584 54.2852C111.584 58.364 116.352 61.1789 123.59 61.1789C132.38 61.1789 138.469 57.8469 138.469 52.2745C138.469 47.4489 134.793 45.6106 129.68 45.2659ZM124.222 21.1379C128.761 21.1379 131.863 24.9295 131.863 30.2721C131.863 34.5807 129.105 37.6254 125.027 37.6254C120.546 37.6254 117.386 33.8913 117.386 28.5487C117.386 24.1252 120.201 21.1379 124.222 21.1379ZM124.969 59.6853C119.167 59.6853 115.031 56.9278 115.031 52.6766C115.031 50.0341 116.812 48.5404 117.96 47.5638C118.65 47.7936 119.454 47.9659 120.431 48.0234L129.278 48.5979C134.333 49 135.769 51.183 135.769 53.6533C135.769 57.2725 131.001 59.6853 124.969 59.6853ZM166.521 44.8063V28.0316C166.521 22.5167 163.591 19.4719 158.65 19.4719C154.687 19.4719 151.642 21.7124 148.425 26.021V8.5569H147.621L140.267 10.625V11.4293L141.818 11.4867C143.886 11.5442 144.748 12.4059 144.748 14.4165V44.8063C144.748 47.3915 142.737 47.851 140.669 48.1957V49H152.504V48.1957C150.435 47.851 148.425 47.3915 148.425 44.8063V27.3997C151.584 23.7231 154.17 22.2294 157.214 22.2294C160.719 22.2294 162.844 24.4699 162.844 28.2614V44.8063C162.844 47.3915 160.833 47.851 158.765 48.1957V49H170.542V48.1957C168.531 47.851 166.521 47.3915 166.521 44.8063ZM186.986 21.9422V20.3337H178.369V14.4165H177.565L171.533 21.1379V21.9422H174.635V42.3935C174.635 47.1617 177.048 49.8617 181.011 49.8617C184.631 49.8617 186.412 47.6213 186.986 46.0702L186.584 45.8404C185.837 46.5872 184.975 47.4489 182.85 47.4489C179.92 47.4489 178.369 45.5531 178.369 42.2786V21.9422H186.986ZM63.5702 102H81.8385C90.2833 102 95.3962 98.0936 95.3962 91.7169C95.3962 86.4892 90.9727 82.6402 83.562 81.8359C89.3067 80.8593 92.6961 77.4124 92.6961 72.7017C92.6961 67.0144 87.6407 63.625 79.2534 63.625H63.5702V64.4293C67.0171 64.6016 68.7979 65.2335 68.7979 68.7953V96.7723C68.7979 100.449 67.0171 101.023 63.5702 101.196V102ZM72.9342 81.2614V65.2335H78.2193C84.4237 65.2335 88.1578 68.0485 88.1578 72.7592C88.1578 78.1018 84.8833 81.2614 79.4257 81.2614H72.9342ZM78.047 100.391C74.198 100.391 72.9342 99.0702 72.9342 96.6574V82.87H79.4832C86.6641 82.87 90.8004 86.3168 90.8004 91.7169C90.8004 97.0021 87.0663 100.391 81.1492 100.391H78.047ZM114.204 72.4719C111.044 72.4719 108.172 75.0571 106.104 80.2274V72.4719H105.3L97.9463 74.5401V75.3443H99.4399C101.565 75.4592 102.427 76.3209 102.427 78.3316V97.6914C102.427 100.334 100.359 100.851 98.1186 101.196V102H111.906V101.196C108.115 100.851 106.104 100.334 106.104 97.6914V81.8933C107.942 78.0444 110.7 76.0911 113.515 76.0911C114.491 76.0911 115.41 76.2635 116.215 76.7231L116.502 72.989C115.698 72.6443 114.951 72.4719 114.204 72.4719ZM141.631 99.9319C139.563 99.8744 138.643 99.0702 138.643 97.0021V82.7551C138.643 76.4358 134.794 72.4719 128.762 72.4719C121.122 72.4719 115.952 78.389 118.939 84.1912L122.616 82.8125C120.662 78.6188 123.133 74.0805 127.786 74.0805C132.267 74.0805 134.967 77.355 134.967 82.7551V84.5934L130.026 85.57C121.179 87.236 117.79 89.8786 117.79 95.3935C117.79 99.817 120.835 102.862 125.258 102.862C129.509 102.862 133.243 99.9893 134.967 95.2786V102.862H135.771L143.124 100.794V99.9893L141.631 99.9319ZM134.967 93.785C133.301 97.5191 130.256 100.047 127.039 100.047C123.879 100.047 121.696 97.5765 121.696 94.302C121.696 90.3956 124.282 88.3275 130.199 87.1785L134.967 86.2019V93.785ZM170.63 97.8063V81.0316C170.63 75.5167 167.7 72.4719 162.817 72.4719C158.738 72.4719 155.693 74.8273 152.419 79.2508V72.4719H151.614L144.261 74.5401V75.3443H145.755C147.88 75.4592 148.742 76.3209 148.742 78.3316V97.8063C148.742 100.391 146.731 100.851 144.663 101.196V102H156.44V101.196C154.429 100.851 152.419 100.391 152.419 97.8063V80.572C155.693 76.7231 158.221 75.2294 161.381 75.2294C164.827 75.2294 166.953 77.4699 166.953 81.2614V97.8063C166.953 100.391 164.942 100.851 162.932 101.196V102H174.708V101.196C172.64 100.851 170.63 100.391 170.63 97.8063ZM188.456 102.804C194.029 102.804 197.935 99.3 199.601 93.7275L198.912 93.4978C196.729 97.3467 193.512 99.2425 190.007 99.2425C183.516 99.2425 179.552 93.4978 179.552 85.7998C179.552 79.021 183.114 74.0805 188.341 74.0805C192.478 74.0805 194.373 77.6997 195.005 80.572L198.739 79.2508C198.165 76.0337 194.488 72.4719 189.088 72.4719C180.931 72.4719 175.703 79.1359 175.703 88.0977C175.703 96.4276 180.931 102.804 188.456 102.804ZM226.693 97.8063V81.0316C226.693 75.5167 223.763 72.4719 218.822 72.4719C214.858 72.4719 211.814 74.7124 208.597 79.021V61.5569H207.792L200.439 63.625V64.4293L201.99 64.4867C204.058 64.5442 204.92 65.4059 204.92 67.4165V97.8063C204.92 100.391 202.909 100.851 200.841 101.196V102H212.675V101.196C210.607 100.851 208.597 100.391 208.597 97.8063V80.3997C211.756 76.7231 214.341 75.2294 217.386 75.2294C220.89 75.2294 223.016 77.4699 223.016 81.2614V97.8063C223.016 100.391 221.005 100.851 218.937 101.196V102H230.714V101.196C228.703 100.851 226.693 100.391 226.693 97.8063ZM255.046 94.302C253.38 96.8297 250.795 99.3 246.486 99.3C239.88 99.3 235.399 94.2446 235.628 86.3743C235.628 85.9147 235.686 85.5125 235.686 85.053H255.62C255.62 77.7571 251.656 72.4719 245.05 72.4719C237.179 72.4719 231.779 78.9061 231.779 88.27C231.779 96.5999 236.72 102.804 244.475 102.804C249.933 102.804 254.241 99.3 255.678 94.5893L255.046 94.302ZM244.246 74.0805C248.554 74.0805 251.254 78.5039 251.369 83.4444H235.916C236.835 77.9295 239.937 74.0805 244.246 74.0805ZM270.144 102.804C276.061 102.804 280.14 99.1851 280.025 93.9573C279.737 83.7317 263.135 86.7189 263.135 79.021C263.135 76.1486 265.548 74.0805 269.224 74.0805C272.269 74.0805 274.969 76.3784 276.061 79.7103L279.45 78.1018C278.186 74.7124 274.108 72.4719 269.454 72.4719C263.709 72.4719 259.861 75.689 259.975 80.5146C260.148 90.3381 276.693 87.1211 276.808 95.6808C276.808 98.9553 274.165 101.196 270.316 101.196C266.754 101.196 263.652 98.5531 262.848 94.4744L259.114 96.1403C260.722 100.104 265.203 102.804 270.144 102.804Z"
        fill="black"
      />
    </MobileTablet>
  </>
)

const Desktop = styled.svg`
  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`
const MobileTablet = styled.svg`
  display: none;
  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export default NavLogo
