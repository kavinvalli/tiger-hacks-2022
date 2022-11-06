import { Box, type BoxProps } from "@chakra-ui/react";

export function Meter(props: BoxProps) {
  return (
    <Box
      as="svg"
      style={{ zIndex: 100, position: "relative" }}
      width="349"
      height="345"
      viewBox="0 0 349 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" width="345" height="345" rx="172.5" fill="#00060E" />
      <path
        d="M324.575 257.991C325.301 258.41 326.23 258.161 326.643 257.432C341.224 231.654 348.928 202.548 348.999 172.915C349.072 142.776 341.247 113.144 326.303 86.9706C311.359 60.797 289.819 38.9955 263.827 23.7377C237.835 8.47992 208.3 0.298367 178.162 0.0080054C148.024 -0.282356 118.336 7.32861 92.0553 22.0828C65.7744 36.837 43.8178 58.2194 28.3726 84.1002C12.9274 109.981 4.53263 139.457 4.02452 169.592C3.52494 199.221 10.6664 228.47 24.7487 254.523C25.1474 255.261 26.0716 255.527 26.8055 255.122V255.122C27.5395 254.717 27.8053 253.794 27.4068 253.056C13.5807 227.467 6.56938 198.741 7.06002 169.643C7.55919 140.038 15.8062 111.081 30.9796 85.656C46.153 60.2307 67.7231 39.2246 93.5415 24.7301C119.36 10.2356 148.525 2.75855 178.133 3.0438C207.74 3.32905 236.756 11.3666 262.29 26.3559C287.825 41.3452 308.986 62.763 323.667 88.4759C338.347 114.189 346.035 143.299 345.964 172.908C345.893 202.011 338.33 230.596 324.013 255.914C323.601 256.643 323.849 257.572 324.575 257.991V257.991Z"
        fill="#D9D9D9"
        fill-opacity="0.2"
      />
      {/* <path
        d="M324.575 257.991C325.301 258.41 326.23 258.161 326.643 257.432C341.224 231.654 348.928 202.548 348.999 172.915C349.072 142.776 341.247 113.144 326.303 86.9706C311.359 60.797 289.819 38.9955 263.827 23.7377C237.835 8.47992 208.3 0.298367 178.162 0.0080054C148.024 -0.282356 118.336 7.32861 92.0553 22.0828C65.7744 36.837 43.8178 58.2194 28.3726 84.1002C12.9274 109.981 4.53263 139.457 4.02452 169.592C3.52494 199.221 10.6664 228.47 24.7487 254.523C25.1474 255.261 26.0716 255.527 26.8055 255.122V255.122C27.5395 254.717 27.8053 253.794 27.4068 253.056C13.5807 227.467 6.56938 198.741 7.06002 169.643C7.55919 140.038 15.8062 111.081 30.9796 85.656C46.153 60.2307 67.7231 39.2246 93.5415 24.7301C119.36 10.2356 148.525 2.75855 178.133 3.0438C207.74 3.32905 236.756 11.3666 262.29 26.3559C287.825 41.3452 308.986 62.763 323.667 88.4759C338.347 114.189 346.035 143.299 345.964 172.908C345.893 202.011 338.33 230.596 324.013 255.914C323.601 256.643 323.849 257.572 324.575 257.991V257.991Z"
        style={{ background: "yellow" }}
        fill-opacity="1"
      /> */}
      <circle
        cx="177"
        cy="173"
        r="63"
        stroke="#87888C"
        stroke-opacity="0.15"
        stroke-width="4"
      />
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", userSelect: "text" }}
        font-family="Poppins"
        font-size="37"
        font-weight="600"
        letter-spacing="0em"
      >
        {/* <foreignObject width="100" height="150" x="154" y="171.95">
          <div xmlns="http://www.w3.org/1999/xhtml">
            <input></input>
          </div>
        </foreignObject> */}
        <tspan id="speed" x="154" y="171.95">
          60
        </tspan>
      </text>
      <text
        fill="#87888C"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="18"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="151" y="206.8">
          Km/h
        </tspan>
      </text>
      <path
        d="M314.423 250.741L286.576 234.602"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M327.807 220.701L318.956 217.78"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M321.363 236.122L313.079 231.957"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M336 188.635L326.604 188.19"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M333.082 205.277L323.068 202.994"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M228.55 22.2147L225.184 31.5265"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M243.805 27.7533L239.265 37.0865"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M257.726 35.6567L241.185 64.3268"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M271.977 44.3841L265.657 52.5167"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M284.308 55.4881L278.555 62.377"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M296.624 66.5755L289.707 74.1023"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M307.195 79.5124L299.084 85.8279"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M315.32 92.901L288.025 110.052"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M323.638 107.869L314.911 112.346"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M329.515 123.279L320.181 126.533"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M332.464 139.931L323.686 141.325"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M335.403 155.962L326.614 156.74"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M211.541 17.915L209.924 26.578"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M113.55 26.6006L117.82 36.3889"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M128.799 20.4287L132.493 30.8443"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M145.227 16.7139L147.161 27.1617"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M162.242 14.2319L162.416 24.7122"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M178.48 13L179.035 46.2901"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M195.098 14.2319L195.272 24.7122"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M47.8594 76.5854L56.7816 83.8218"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M59.0117 64.8652L67.3371 71.4959"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M71.3276 53.1401L78.49 60.4088"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M84.23 42.647L90.2293 50.5536"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M98.1431 34.1187L115.626 62.1646"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <g filter="url(#filter0_d_103_4)">
        <path
          d="M19.1821 186.34L28.5476 184.935"
          stroke="#00D1FF"
          // fill="none"
          // strokeOpacity={0}
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter1_d_103_4)">
        <path
          d="M18 172.981L49.6775 172.407"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter2_d_103_4)">
        <path
          d="M30.3554 233.827L40.8429 229.318"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter3_d_103_4)">
        <path
          d="M25.059 218.408L34.9906 215.759"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter4_d_103_4)">
        <path
          d="M21.5341 202.371L30.8894 200.35"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter5_d_103_4)">
        <path
          d="M39.8307 248.153L65.983 232.874"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter6_d_103_4)">
        <path
          d="M18.585 153.667L28.5575 153.485"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter7_d_103_4)">
        <path
          d="M20.9062 136.404L30.93 139.303"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter8_d_103_4)">
        <path
          d="M25.5947 120.984L35.0421 124.511"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter9_d_103_4)">
        <path
          d="M32.0386 105.564L40.9198 110.335"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter10_d_103_4)">
        <path
          d="M39.5698 90.9453L68.0042 107.074"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <path
        d="M335.993 174.244L303.729 174.835"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="76" y="229.6">
          20
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="61" y="178.6">
          40
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="77" y="118.6">
          60
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="119" y="81.6">
          80
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="165" y="69.6">
          100
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="221" y="82.6">
          120
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="256" y="124.6">
          140
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="266" y="178.6">
          160
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="252" y="230.6">
          180
        </tspan>
      </text>
      <defs>
        <filter
          id="filter0_d_103_4"
          x="1.97461"
          y="168.728"
          width="43.7803"
          height="35.82"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_103_4"
          x="0.792969"
          y="156.2"
          width="66.0918"
          height="34.9881"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_103_4"
          x="13.1479"
          y="213.11"
          width="44.9023"
          height="38.9243"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_103_4"
          x="7.85156"
          y="199.551"
          width="44.3467"
          height="37.064"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_103_4"
          x="4.32666"
          y="184.142"
          width="43.77"
          height="36.4367"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_103_4"
          x="22.6235"
          y="216.666"
          width="60.5669"
          height="49.6947"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_103_4"
          x="1.37793"
          y="137.277"
          width="44.3867"
          height="34.5975"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_103_4"
          x="3.69873"
          y="120.196"
          width="44.439"
          height="37.3147"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_103_4"
          x="8.38721"
          y="104.777"
          width="43.8623"
          height="37.9419"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_103_4"
          x="14.8311"
          y="89.3569"
          width="43.2964"
          height="39.1855"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_103_4"
          x="22.3623"
          y="74.7378"
          width="62.8491"
          height="50.5434"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
      </defs>
    </Box>
  );
}

export function PressureMeter(props: BoxProps) {
  return (
    <Box
      as="svg"
      style={{ zIndex: 100, position: "relative" }}
      width="349"
      height="345"
      viewBox="0 0 349 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" width="345" height="345" rx="172.5" fill="#00060E" />
      <path
        d="M324.575 257.991C325.301 258.41 326.23 258.161 326.643 257.432C341.224 231.654 348.928 202.548 348.999 172.915C349.072 142.776 341.247 113.144 326.303 86.9706C311.359 60.797 289.819 38.9955 263.827 23.7377C237.835 8.47992 208.3 0.298367 178.162 0.0080054C148.024 -0.282356 118.336 7.32861 92.0553 22.0828C65.7744 36.837 43.8178 58.2194 28.3726 84.1002C12.9274 109.981 4.53263 139.457 4.02452 169.592C3.52494 199.221 10.6664 228.47 24.7487 254.523C25.1474 255.261 26.0716 255.527 26.8055 255.122V255.122C27.5395 254.717 27.8053 253.794 27.4068 253.056C13.5807 227.467 6.56938 198.741 7.06002 169.643C7.55919 140.038 15.8062 111.081 30.9796 85.656C46.153 60.2307 67.7231 39.2246 93.5415 24.7301C119.36 10.2356 148.525 2.75855 178.133 3.0438C207.74 3.32905 236.756 11.3666 262.29 26.3559C287.825 41.3452 308.986 62.763 323.667 88.4759C338.347 114.189 346.035 143.299 345.964 172.908C345.893 202.011 338.33 230.596 324.013 255.914C323.601 256.643 323.849 257.572 324.575 257.991V257.991Z"
        fill="#D9D9D9"
        fill-opacity="0.2"
      />
      {/* <path
        d="M324.575 257.991C325.301 258.41 326.23 258.161 326.643 257.432C341.224 231.654 348.928 202.548 348.999 172.915C349.072 142.776 341.247 113.144 326.303 86.9706C311.359 60.797 289.819 38.9955 263.827 23.7377C237.835 8.47992 208.3 0.298367 178.162 0.0080054C148.024 -0.282356 118.336 7.32861 92.0553 22.0828C65.7744 36.837 43.8178 58.2194 28.3726 84.1002C12.9274 109.981 4.53263 139.457 4.02452 169.592C3.52494 199.221 10.6664 228.47 24.7487 254.523C25.1474 255.261 26.0716 255.527 26.8055 255.122V255.122C27.5395 254.717 27.8053 253.794 27.4068 253.056C13.5807 227.467 6.56938 198.741 7.06002 169.643C7.55919 140.038 15.8062 111.081 30.9796 85.656C46.153 60.2307 67.7231 39.2246 93.5415 24.7301C119.36 10.2356 148.525 2.75855 178.133 3.0438C207.74 3.32905 236.756 11.3666 262.29 26.3559C287.825 41.3452 308.986 62.763 323.667 88.4759C338.347 114.189 346.035 143.299 345.964 172.908C345.893 202.011 338.33 230.596 324.013 255.914C323.601 256.643 323.849 257.572 324.575 257.991V257.991Z"
        style={{ background: "yellow" }}
        fill-opacity="1"
      /> */}
      <circle
        cx="177"
        cy="173"
        r="63"
        stroke="#87888C"
        stroke-opacity="0.15"
        stroke-width="4"
      />
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none", userSelect: "text" }}
        font-family="Poppins"
        font-size="37"
        font-weight="600"
        letter-spacing="0em"
      >
        {/* <foreignObject width="100" height="150" x="154" y="171.95">
          <div xmlns="http://www.w3.org/1999/xhtml">
            <input></input>
          </div>
        </foreignObject> */}
        <tspan id="psi" x="154" y="171.95">
          31
        </tspan>
      </text>
      <text
        fill="#87888C"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="18"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="155" y="206.8">
          psi
        </tspan>
      </text>
      <path
        d="M314.423 250.741L286.576 234.602"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M327.807 220.701L318.956 217.78"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M321.363 236.122L313.079 231.957"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M336 188.635L326.604 188.19"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M333.082 205.277L323.068 202.994"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M228.55 22.2147L225.184 31.5265"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M243.805 27.7533L239.265 37.0865"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M257.726 35.6567L241.185 64.3268"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M271.977 44.3841L265.657 52.5167"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M284.308 55.4881L278.555 62.377"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M296.624 66.5755L289.707 74.1023"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M307.195 79.5124L299.084 85.8279"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M315.32 92.901L288.025 110.052"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M323.638 107.869L314.911 112.346"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M329.515 123.279L320.181 126.533"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M332.464 139.931L323.686 141.325"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M335.403 155.962L326.614 156.74"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M211.541 17.915L209.924 26.578"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M113.55 26.6006L117.82 36.3889"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M128.799 20.4287L132.493 30.8443"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M145.227 16.7139L147.161 27.1617"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M162.242 14.2319L162.416 24.7122"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M178.48 13L179.035 46.2901"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M195.098 14.2319L195.272 24.7122"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M47.8594 76.5854L56.7816 83.8218"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M59.0117 64.8652L67.3371 71.4959"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M71.3276 53.1401L78.49 60.4088"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M84.23 42.647L90.2293 50.5536"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <path
        d="M98.1431 34.1187L115.626 62.1646"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <g filter="url(#filter0_d_103_4)">
        <path
          d="M19.1821 186.34L28.5476 184.935"
          stroke="#00D1FF"
          // fill="none"
          // strokeOpacity={0}
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter1_d_103_4)">
        <path
          d="M18 172.981L49.6775 172.407"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter2_d_103_4)">
        <path
          d="M30.3554 233.827L40.8429 229.318"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter3_d_103_4)">
        <path
          d="M25.059 218.408L34.9906 215.759"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter4_d_103_4)">
        <path
          d="M21.5341 202.371L30.8894 200.35"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter5_d_103_4)">
        <path
          d="M39.8307 248.153L65.983 232.874"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter6_d_103_4)">
        <path
          d="M18.585 153.667L28.5575 153.485"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter7_d_103_4)">
        <path
          d="M20.9062 136.404L30.93 139.303"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter8_d_103_4)">
        <path
          d="M25.5947 120.984L35.0421 124.511"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter9_d_103_4)">
        <path
          d="M32.0386 105.564L40.9198 110.335"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <g filter="url(#filter10_d_103_4)">
        <path
          d="M39.5698 90.9453L68.0042 107.074"
          stroke="#00D1FF"
          // fill="none"
          stroke-width="2.41451"
          stroke-linecap="round"
        />
      </g>
      <path
        d="M335.993 174.244L303.729 174.835"
        stroke="#87888C"
        stroke-opacity="0.2"
        stroke-width="2.41451"
        stroke-linecap="round"
      />
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="76" y="229.6">
          29
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="61" y="178.6">
          30
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="77" y="118.6">
          31
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="119" y="81.6">
          32
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="165" y="69.6">
          33
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="221" y="82.6">
          34
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="256" y="124.6">
          35
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="266" y="178.6">
          36
        </tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", pointerEvents: "none" }}
        font-family="Poppins"
        font-size="16"
        font-weight="500"
        letter-spacing="0em"
      >
        <tspan x="252" y="230.6">
          37
        </tspan>
      </text>
      <defs>
        <filter
          id="filter0_d_103_4"
          x="1.97461"
          y="168.728"
          width="43.7803"
          height="35.82"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_103_4"
          x="0.792969"
          y="156.2"
          width="66.0918"
          height="34.9881"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_103_4"
          x="13.1479"
          y="213.11"
          width="44.9023"
          height="38.9243"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_103_4"
          x="7.85156"
          y="199.551"
          width="44.3467"
          height="37.064"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_103_4"
          x="4.32666"
          y="184.142"
          width="43.77"
          height="36.4367"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_103_4"
          x="22.6235"
          y="216.666"
          width="60.5669"
          height="49.6947"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_103_4"
          x="1.37793"
          y="137.277"
          width="44.3867"
          height="34.5975"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_103_4"
          x="3.69873"
          y="120.196"
          width="44.439"
          height="37.3147"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_103_4"
          x="8.38721"
          y="104.777"
          width="43.8623"
          height="37.9419"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_103_4"
          x="14.8311"
          y="89.3569"
          width="43.2964"
          height="39.1855"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_103_4"
          x="22.3623"
          y="74.7378"
          width="62.8491"
          height="50.5434"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.28 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_103_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_103_4"
            result="shape"
          />
        </filter>
      </defs>
    </Box>
  );
}
