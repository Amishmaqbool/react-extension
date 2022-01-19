export default function CategoryExperience() {
    return (
        <div className="">
            <div className="mt-3 flex items-center justify-between">
                <div class="relative w-64 h-10 bg-gray-100 rounded-lg overflow-hidden">
                    <svg className="absolute inset-0 ml-2 m-auto" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4998 17.5L13.7615 13.755L17.4998 17.5ZM15.8332 8.75C15.8332 10.6286 15.0869 12.4303 13.7585 13.7587C12.4301 15.0871 10.6285 15.8333 8.74984 15.8333C6.87122 15.8333 5.06955 15.0871 3.74116 13.7587C2.41278 12.4303 1.6665 10.6286 1.6665 8.75C1.6665 6.87139 2.41278 5.06971 3.74116 3.74133C5.06955 2.41295 6.87122 1.66667 8.74984 1.66667C10.6285 1.66667 12.4301 2.41295 13.7585 3.74133C15.0869 5.06971 15.8332 6.87139 15.8332 8.75V8.75Z" stroke="#6F6E73" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input className="px-10 w-full h-full" placeholder="Search experience" />
                </div>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7C16.9706 7 21 6.10457 21 5C21 3.89543 16.9706 3 12 3C7.02944 3 3 3.89543 3 5C3 6.10457 7.02944 7 12 7Z" stroke="#6F6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 5C3 7.23 6.871 11.674 8.856 13.805C9.58416 14.5769 9.99291 15.5959 10 16.657V22L14 20V16.657C14 15.596 14.421 14.582 15.144 13.805C17.13 11.674 21 7.231 21 5" stroke="#6F6E73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}