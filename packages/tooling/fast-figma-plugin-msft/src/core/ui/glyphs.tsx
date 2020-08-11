import React from "react";

export function refresh(className: string): JSX.Element {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M8 15C8.80208 15 9.57031 14.8776 10.3047 14.6328C11.0391 14.388 11.7109 14.0391 12.3203 13.5859C12.9297 13.1328 13.4583 12.5911 13.9062 11.9609C14.3542 11.3307 14.6979 10.6276 14.9375 9.85156L15.8906 10.1484C15.6302 11.0182 15.2422 11.8099 14.7266 12.5234C14.2109 13.237 13.6068 13.8542 12.9141 14.375C12.2214 14.8958 11.4557 15.2943 10.6172 15.5703C9.77865 15.8464 8.90625 15.9896 8 16C7.28646 16 6.59115 15.9115 5.91406 15.7344C5.23698 15.5573 4.59896 15.3021 4 14.9688C3.40104 14.6354 2.84375 14.2266 2.32812 13.7422C1.8125 13.2578 1.36979 12.7109 1 12.1016V14H0V10H4V11H1.53125C1.83854 11.6094 2.21875 12.1589 2.67188 12.6484C3.125 13.138 3.63542 13.5573 4.20312 13.9062C4.77083 14.2552 5.3724 14.5234 6.00781 14.7109C6.64323 14.8984 7.30729 14.9948 8 15ZM16 2V6H12V5H14.4688C14.1615 4.39062 13.7812 3.84115 13.3281 3.35156C12.875 2.86198 12.3646 2.44271 11.7969 2.09375C11.2292 1.74479 10.6276 1.47656 9.99219 1.28906C9.35677 1.10156 8.69271 1.00521 8 1C7.19792 1 6.42969 1.1224 5.69531 1.36719C4.96094 1.61198 4.28906 1.96094 3.67969 2.41406C3.07031 2.86719 2.54167 3.40885 2.09375 4.03906C1.64583 4.66927 1.30208 5.3724 1.0625 6.14844L0.109375 5.85156C0.369792 4.98698 0.757812 4.19531 1.27344 3.47656C1.78906 2.75781 2.39323 2.14062 3.08594 1.625C3.77865 1.10938 4.54427 0.710938 5.38281 0.429688C6.22135 0.148438 7.09375 0.00520833 8 0C8.71354 0 9.40885 0.0885417 10.0859 0.265625C10.763 0.442708 11.401 0.697917 12 1.03125C12.599 1.36458 13.1562 1.77344 13.6719 2.25781C14.1875 2.74219 14.6302 3.28906 15 3.89844V2H16Z"
                fill="black"
            />
        </svg>
    );
}

export function revertChanges(className: string): JSX.Element {
    return (
        <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M15 9.5C15 10.099 14.9219 10.6745 14.7656 11.2266C14.6094 11.7786 14.3906 12.2943 14.1094 12.7734C13.8281 13.2526 13.4896 13.6927 13.0938 14.0938C12.6979 14.4948 12.2604 14.8333 11.7812 15.1094C11.3021 15.3854 10.7839 15.6042 10.2266 15.7656C9.66927 15.9271 9.09375 16.0052 8.5 16C7.90104 16 7.32552 15.9219 6.77344 15.7656C6.22135 15.6094 5.70573 15.3906 5.22656 15.1094C4.7474 14.8281 4.30729 14.4896 3.90625 14.0938C3.50521 13.6979 3.16667 13.2604 2.89062 12.7812C2.61458 12.3021 2.39583 11.7839 2.23438 11.2266C2.07292 10.6693 1.99479 10.0938 2 9.5V9H3V9.5C3 10.0052 3.0651 10.4922 3.19531 10.9609C3.32552 11.4297 3.51042 11.8672 3.75 12.2734C3.98958 12.6797 4.27604 13.0495 4.60938 13.3828C4.94271 13.7161 5.3151 14.0052 5.72656 14.25C6.13802 14.4948 6.57552 14.6797 7.03906 14.8047C7.5026 14.9297 7.98958 14.9948 8.5 15C9.00521 15 9.49219 14.9349 9.96094 14.8047C10.4297 14.6745 10.8672 14.4896 11.2734 14.25C11.6797 14.0104 12.0495 13.724 12.3828 13.3906C12.7161 13.0573 13.0052 12.6849 13.25 12.2734C13.4948 11.862 13.6797 11.4245 13.8047 10.9609C13.9297 10.4974 13.9948 10.0104 14 9.5C14 8.99479 13.9349 8.50781 13.8047 8.03906C13.6745 7.57031 13.4896 7.13281 13.25 6.72656C13.0104 6.32031 12.724 5.95052 12.3906 5.61719C12.0573 5.28385 11.6849 4.99479 11.2734 4.75C10.862 4.50521 10.4245 4.32031 9.96094 4.19531C9.4974 4.07031 9.01042 4.00521 8.5 4H1.95312L4.22656 6.27344L3.52344 6.97656L0.046875 3.5L3.52344 0.0234375L4.22656 0.726562L1.95312 3H8.5C9.09896 3 9.67448 3.07812 10.2266 3.23438C10.7786 3.39062 11.2943 3.60938 11.7734 3.89062C12.2526 4.17188 12.6927 4.51042 13.0938 4.90625C13.4948 5.30208 13.8333 5.73958 14.1094 6.21875C14.3854 6.69792 14.6042 7.21615 14.7656 7.77344C14.9271 8.33073 15.0052 8.90625 15 9.5Z"
                fill="black"
            />
        </svg>
    );
}

export function detach(className: string): JSX.Element {
    return (
        <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M6.5 3.99962L9.23223 1.26739C10.2085 0.291079 11.7915 0.291079 12.7678 1.26739C13.7441 2.2437 13.7441 3.82661 12.7678 4.80292L10.0707 7.5M4 6.49962L1.23223 9.26739C0.255922 10.2437 0.255922 11.8266 1.23223 12.8029C2.20854 13.7792 3.79146 13.7792 4.76777 12.8029L7.57069 10M0 4.5H3M4.5 0V3M11 9.5H14M9.5 11V14"
                stroke="#474747"
                fill="none"
            />
        </svg>
    );
}
