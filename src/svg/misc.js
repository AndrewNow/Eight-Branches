import React from "react"

export const Arrow = ({color}) => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
      fill={color ? color : "black"}

    />
  </svg>
)


export const CheckmarkSVG = () => (
  <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6247 20.8862L6.23846 15.4999L4.4043 17.3212L11.6247 24.5416L27.1247 9.04159L25.3035 7.22034L11.6247 20.8862Z"
        fill="black"
      />
    </svg>
)

export const LeftLogoPattern = () => {
  return (
    <svg
      width="40"
      height="658"
      viewBox="0 0 40 658"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.6025 58.1603C30.2795 61.3057 25.2795 63.1204 20 63.1204C10 63.1204 1.86335 56.4363 1.86335 48.2401C1.86335 38.5013 8.1677 33.3597 20 33.3597C32.764 33.3597 38.1366 36.6867 38.1366 44.641V52.0206C23.6957 51.9299 19.441 48.8752 19.441 39.3179V25.6171C19.441 16.0599 23.7888 13.0052 38.1366 12.9144V18.5097C38.1366 28.067 33.323 31.5753 20 31.5753C8.04348 31.5753 1.86335 26.4337 1.86335 16.695C1.86335 8.55921 10 1.81467 20 1.81467C25.1863 1.81467 30.2795 3.72008 33.6025 6.86552L34.9068 5.59524C31.2112 2.08687 25.7453 0 20 0C9.06832 0 0 7.47041 0 16.695C0 27.5225 7.04969 33.39 20 33.39C34.2547 33.39 40 29.1558 40 18.5097V11.0998C23.2298 11.009 17.5776 14.4267 17.5776 25.6171V39.3179C17.5776 50.5084 23.2298 53.926 40 53.8353V44.641C40 35.5374 33.6957 31.5753 20 31.5753C7.14286 31.5753 0 37.5033 0 48.2401C0 57.4344 8.97516 64.9351 20 64.9351C25.7453 64.9351 31.2112 62.9389 34.9068 59.4306L33.6025 58.1603Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 219.719C30.2795 222.864 25.2795 224.679 20 224.679C10 224.679 1.86335 217.995 1.86335 209.798C1.86335 200.06 8.1677 194.918 20 194.918C32.764 194.918 38.1366 198.245 38.1366 206.199V213.579C23.6957 213.488 19.441 210.434 19.441 200.876V187.175C19.441 177.618 23.7888 174.564 38.1366 174.473V180.068C38.1366 189.625 33.323 193.134 20 193.134C8.04348 193.134 1.86335 187.992 1.86335 178.253C1.86335 170.118 10 163.373 20 163.373C25.1863 163.373 30.2795 165.278 33.6025 168.424L34.9068 167.154C31.2112 163.645 25.7453 161.558 20 161.558C9.06832 161.558 0 169.029 0 178.253C0 189.081 7.04969 194.948 20 194.948C34.2547 194.948 40 190.714 40 180.068V172.658C23.2298 172.567 17.5776 175.985 17.5776 187.175V200.876C17.5776 212.067 23.2298 215.484 40 215.394V206.199C40 197.096 33.6957 193.134 20 193.134C7.14286 193.134 0 199.062 0 209.798C0 218.993 8.97516 226.493 20 226.493C25.7453 226.493 31.2112 224.497 34.9068 220.989L33.6025 219.719Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 166.321C30.2795 169.416 25.2795 171.201 20 171.201C10 171.201 1.86335 164.624 1.86335 156.559C1.86335 146.976 8.1677 141.917 20 141.917C32.764 141.917 38.1366 145.19 38.1366 153.018V160.279C23.6957 160.19 19.441 157.184 19.441 147.78V134.298C19.441 124.894 23.7888 121.888 38.1366 121.799V127.304C38.1366 136.709 33.323 140.161 20 140.161C8.04348 140.161 1.86335 135.102 1.86335 125.519C1.86335 117.513 10 110.876 20 110.876C25.1863 110.876 30.2795 112.751 33.6025 115.846L34.9068 114.597C31.2112 111.144 25.7453 109.091 20 109.091C9.06832 109.091 0 116.442 0 125.519C0 136.173 7.04969 141.947 20 141.947C34.2547 141.947 40 137.78 40 127.304V120.013C23.2298 119.924 17.5776 123.287 17.5776 134.298V147.78C17.5776 158.791 23.2298 162.154 40 162.065V153.018C40 144.06 33.6957 140.161 20 140.161C7.14286 140.161 0 145.994 0 156.559C0 165.606 8.97516 172.987 20 172.987C25.7453 172.987 31.2112 171.023 34.9068 167.57L33.6025 166.321Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 327.879C30.2795 330.974 25.2795 332.76 20 332.76C10 332.76 1.86335 326.183 1.86335 318.118C1.86335 308.535 8.1677 303.475 20 303.475C32.764 303.475 38.1366 306.749 38.1366 314.576V321.838C23.6957 321.748 19.441 318.743 19.441 309.338V295.857C19.441 286.452 23.7888 283.446 38.1366 283.357V288.863C38.1366 298.267 33.323 301.72 20 301.72C8.04348 301.72 1.86335 296.66 1.86335 287.077C1.86335 279.072 10 272.435 20 272.435C25.1863 272.435 30.2795 274.31 33.6025 277.405L34.9068 276.155C31.2112 272.703 25.7453 270.649 20 270.649C9.06832 270.649 0 278 0 287.077C0 297.732 7.04969 303.505 20 303.505C34.2547 303.505 40 299.339 40 288.863V281.572C23.2298 281.482 17.5776 284.845 17.5776 295.857V309.338C17.5776 320.35 23.2298 323.713 40 323.623V314.576C40 305.618 33.6957 301.72 20 301.72C7.14286 301.72 0 307.553 0 318.118C0 327.165 8.97516 334.546 20 334.546C25.7453 334.546 31.2112 332.581 34.9068 329.129L33.6025 327.879Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 113.939C30.2795 117.235 25.2795 119.137 20 119.137C10 119.137 1.86335 112.132 1.86335 103.543C1.86335 93.3364 8.1677 87.9481 20 87.9481C32.764 87.9481 38.1366 91.4347 38.1366 99.7708V107.505C23.6957 107.41 19.441 104.208 19.441 94.1922V79.8338C19.441 69.8178 23.7888 66.6165 38.1366 66.5214V72.3852C38.1366 82.4012 33.323 86.078 20 86.078C8.04348 86.078 1.86335 80.6896 1.86335 70.4834C1.86335 61.9571 10 54.8888 20 54.8888C25.1863 54.8888 30.2795 56.8857 33.6025 60.1821L34.9068 58.8509C31.2112 55.1741 25.7453 52.9871 20 52.9871C9.06832 52.9871 0 60.816 0 70.4834C0 81.8307 7.04969 87.9798 20 87.9798C34.2547 87.9798 40 83.5423 40 72.3852V64.6196C23.2298 64.5245 17.5776 68.1062 17.5776 79.8338V94.1922C17.5776 105.92 23.2298 109.502 40 109.406V99.7708C40 90.2302 33.6957 86.078 20 86.078C7.14286 86.078 0 92.2905 0 103.543C0 113.178 8.97516 121.039 20 121.039C25.7453 121.039 31.2112 118.947 34.9068 115.27L33.6025 113.939Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 275.497C30.2795 278.794 25.2795 280.696 20 280.696C10 280.696 1.86335 273.691 1.86335 265.101C1.86335 254.895 8.1677 249.506 20 249.506C32.764 249.506 38.1366 252.993 38.1366 261.329V269.063C23.6957 268.968 19.441 265.767 19.441 255.751V241.392C19.441 231.376 23.7888 228.175 38.1366 228.08V233.944C38.1366 243.96 33.323 247.636 20 247.636C8.04348 247.636 1.86335 242.248 1.86335 232.042C1.86335 223.515 10 216.447 20 216.447C25.1863 216.447 30.2795 218.444 33.6025 221.74L34.9068 220.409C31.2112 216.732 25.7453 214.545 20 214.545C9.06832 214.545 0 222.374 0 232.042C0 243.389 7.04969 249.538 20 249.538C34.2547 249.538 40 245.101 40 233.944V226.178C23.2298 226.083 17.5776 229.665 17.5776 241.392V255.751C17.5776 267.478 23.2298 271.06 40 270.965V261.329C40 251.789 33.6957 247.636 20 247.636C7.14286 247.636 0 253.849 0 265.101C0 274.737 8.97516 282.597 20 282.597C25.7453 282.597 31.2112 280.505 34.9068 276.829L33.6025 275.497Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 381.16C30.2795 384.306 25.2795 386.12 20 386.12C10 386.12 1.86335 379.436 1.86335 371.24C1.86335 361.501 8.1677 356.36 20 356.36C32.764 356.36 38.1366 359.687 38.1366 367.641V375.021C23.6957 374.93 19.441 371.875 19.441 362.318V348.617C19.441 339.06 23.7888 336.005 38.1366 335.914V341.51C38.1366 351.067 33.323 354.575 20 354.575C8.04348 354.575 1.86335 349.434 1.86335 339.695C1.86335 331.559 10 324.815 20 324.815C25.1863 324.815 30.2795 326.72 33.6025 329.866L34.9068 328.595C31.2112 325.087 25.7453 323 20 323C9.06832 323 0 330.47 0 339.695C0 350.523 7.04969 356.39 20 356.39C34.2547 356.39 40 352.156 40 341.51V334.1C23.2298 334.009 17.5776 337.427 17.5776 348.617V362.318C17.5776 373.508 23.2298 376.926 40 376.835V367.641C40 358.537 33.6957 354.575 20 354.575C7.14286 354.575 0 360.503 0 371.24C0 380.434 8.97516 387.935 20 387.935C25.7453 387.935 31.2112 385.939 34.9068 382.431L33.6025 381.16Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 542.719C30.2795 545.864 25.2795 547.679 20 547.679C10 547.679 1.86335 540.995 1.86335 532.798C1.86335 523.06 8.1677 517.918 20 517.918C32.764 517.918 38.1366 521.245 38.1366 529.199V536.579C23.6957 536.488 19.441 533.434 19.441 523.876V510.175C19.441 500.618 23.7888 497.564 38.1366 497.473V503.068C38.1366 512.625 33.323 516.134 20 516.134C8.04348 516.134 1.86335 510.992 1.86335 501.253C1.86335 493.118 10 486.373 20 486.373C25.1863 486.373 30.2795 488.278 33.6025 491.424L34.9068 490.154C31.2112 486.645 25.7453 484.558 20 484.558C9.06832 484.558 0 492.029 0 501.253C0 512.081 7.04969 517.948 20 517.948C34.2547 517.948 40 513.714 40 503.068V495.658C23.2298 495.567 17.5776 498.985 17.5776 510.175V523.876C17.5776 535.067 23.2298 538.484 40 538.394V529.199C40 520.096 33.6957 516.134 20 516.134C7.14286 516.134 0 522.062 0 532.798C0 541.993 8.97516 549.493 20 549.493C25.7453 549.493 31.2112 547.497 34.9068 543.989L33.6025 542.719Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 489.321C30.2795 492.416 25.2795 494.201 20 494.201C10 494.201 1.86335 487.624 1.86335 479.559C1.86335 469.976 8.1677 464.917 20 464.917C32.764 464.917 38.1366 468.19 38.1366 476.018V483.279C23.6957 483.19 19.441 480.184 19.441 470.78V457.298C19.441 447.894 23.7888 444.888 38.1366 444.799V450.304C38.1366 459.709 33.323 463.161 20 463.161C8.04348 463.161 1.86335 458.102 1.86335 448.519C1.86335 440.513 10 433.876 20 433.876C25.1863 433.876 30.2795 435.751 33.6025 438.846L34.9068 437.597C31.2112 434.144 25.7453 432.091 20 432.091C9.06832 432.091 0 439.442 0 448.519C0 459.173 7.04969 464.947 20 464.947C34.2547 464.947 40 460.78 40 450.304V443.013C23.2298 442.924 17.5776 446.287 17.5776 457.298V470.78C17.5776 481.791 23.2298 485.154 40 485.065V476.018C40 467.06 33.6957 463.161 20 463.161C7.14286 463.161 0 468.994 0 479.559C0 488.606 8.97516 495.987 20 495.987C25.7453 495.987 31.2112 494.023 34.9068 490.57L33.6025 489.321Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 650.879C30.2795 653.974 25.2795 655.76 20 655.76C10 655.76 1.86335 649.183 1.86335 641.118C1.86335 631.535 8.1677 626.475 20 626.475C32.764 626.475 38.1366 629.749 38.1366 637.576V644.838C23.6957 644.748 19.441 641.743 19.441 632.338V618.857C19.441 609.452 23.7888 606.446 38.1366 606.357V611.863C38.1366 621.267 33.323 624.72 20 624.72C8.04348 624.72 1.86335 619.66 1.86335 610.077C1.86335 602.072 10 595.435 20 595.435C25.1863 595.435 30.2795 597.31 33.6025 600.405L34.9068 599.155C31.2112 595.703 25.7453 593.649 20 593.649C9.06832 593.649 0 601 0 610.077C0 620.732 7.04969 626.505 20 626.505C34.2547 626.505 40 622.339 40 611.863V604.572C23.2298 604.482 17.5776 607.845 17.5776 618.857V632.338C17.5776 643.35 23.2298 646.713 40 646.623V637.576C40 628.618 33.6957 624.72 20 624.72C7.14286 624.72 0 630.553 0 641.118C0 650.165 8.97516 657.546 20 657.546C25.7453 657.546 31.2112 655.581 34.9068 652.129L33.6025 650.879Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 436.939C30.2795 440.235 25.2795 442.137 20 442.137C10 442.137 1.86335 435.132 1.86335 426.543C1.86335 416.336 8.1677 410.948 20 410.948C32.764 410.948 38.1366 414.435 38.1366 422.771V430.505C23.6957 430.41 19.441 427.208 19.441 417.192V402.834C19.441 392.818 23.7888 389.616 38.1366 389.521V395.385C38.1366 405.401 33.323 409.078 20 409.078C8.04348 409.078 1.86335 403.69 1.86335 393.483C1.86335 384.957 10 377.889 20 377.889C25.1863 377.889 30.2795 379.886 33.6025 383.182L34.9068 381.851C31.2112 378.174 25.7453 375.987 20 375.987C9.06832 375.987 0 383.816 0 393.483C0 404.831 7.04969 410.98 20 410.98C34.2547 410.98 40 406.542 40 395.385V387.62C23.2298 387.525 17.5776 391.106 17.5776 402.834V417.192C17.5776 428.92 23.2298 432.502 40 432.406V422.771C40 413.23 33.6957 409.078 20 409.078C7.14286 409.078 0 415.29 0 426.543C0 436.178 8.97516 444.039 20 444.039C25.7453 444.039 31.2112 441.947 34.9068 438.27L33.6025 436.939Z"
        fill="#F8F5ED"
      />
      <path
        d="M33.6025 598.497C30.2795 601.794 25.2795 603.696 20 603.696C10 603.696 1.86335 596.691 1.86335 588.101C1.86335 577.895 8.1677 572.506 20 572.506C32.764 572.506 38.1366 575.993 38.1366 584.329V592.063C23.6957 591.968 19.441 588.767 19.441 578.751V564.392C19.441 554.376 23.7888 551.175 38.1366 551.08V556.944C38.1366 566.96 33.323 570.636 20 570.636C8.04348 570.636 1.86335 565.248 1.86335 555.042C1.86335 546.515 10 539.447 20 539.447C25.1863 539.447 30.2795 541.444 33.6025 544.74L34.9068 543.409C31.2112 539.732 25.7453 537.545 20 537.545C9.06832 537.545 0 545.374 0 555.042C0 566.389 7.04969 572.538 20 572.538C34.2547 572.538 40 568.101 40 556.944V549.178C23.2298 549.083 17.5776 552.665 17.5776 564.392V578.751C17.5776 590.478 23.2298 594.06 40 593.965V584.329C40 574.789 33.6957 570.636 20 570.636C7.14286 570.636 0 576.849 0 588.101C0 597.737 8.97516 605.597 20 605.597C25.7453 605.597 31.2112 603.505 34.9068 599.829L33.6025 598.497Z"
        fill="#F8F5ED"
      />
    </svg>
  )
}