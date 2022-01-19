import Head from 'next/head'
import Image from 'next/image'
import CategoryExperience from '../components/category-experience'
export default function Home() {
  return (
    <div className='max-w-sm bg-white min-h-screen m-auto'>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div class="w-96 h-16 bg-gray-100 py-6 px-5 flex justify-between items-center">
          <svg width={23} height={23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0832 5.58333L3.6665 12L10.0832 18.4167" stroke="#6F6E73" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.6665 12H18.3332" stroke="#6F6E73" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3332 16.6667V10.145C18.3332 9.69127 18.2406 9.2423 18.0611 8.82561C17.8815 8.40892 17.6188 8.03326 17.289 7.72166L11.1448 1.915C10.8354 1.62244 10.4257 1.45943 9.99984 1.45943C9.57399 1.45943 9.16429 1.62244 8.85484 1.915L2.71067 7.72166C2.38086 8.03326 2.11813 8.40892 1.93859 8.82561C1.75904 9.2423 1.66646 9.69127 1.6665 10.145V16.6667C1.6665 17.1087 1.8421 17.5326 2.15466 17.8452C2.46722 18.1577 2.89114 18.3333 3.33317 18.3333H16.6665C17.1085 18.3333 17.5325 18.1577 17.845 17.8452C18.1576 17.5326 18.3332 17.1087 18.3332 16.6667Z" stroke="#6F6E73" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="w-44 h-11 realtive bg-white border overflow-hidden relative rounded-full border-gray-200">
            <svg className="ml-2 absolute inset-0 m-auto" width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx={15} cy={15} r={14} fill="white" stroke="#33373B" strokeWidth={2} />
              <circle cx="14.9998" cy={15} r="10.8333" fill="#C4C4C4" />
              <mask id="mask0_6_971" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={4} y={4} width={22} height={22}>
                <circle cx="14.9998" cy={15} r="10.8333" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_6_971)">
                <rect x="-22.0776" y="14.5174" width="33.1429" height={32} rx={6} transform="rotate(-34 -22.0776 14.5174)" fill="#39C0BA" />
                <rect x="9.36011" y="24.3379" width="33.1429" height={32} rx={6} transform="rotate(-79 9.36011 24.3379)" fill="#FFCE20" />
                <rect x="30.0295" y="52.938" width="33.1429" height={32} rx={6} transform="rotate(-112 30.0295 52.938)" fill="#BB85FF" />
                <rect x="20.8887" y="58.1181" width="33.1429" height={32} rx={6} transform="rotate(-154 20.8887 58.1181)" fill="#FF8B20" />
              </g>
            </svg>
            <svg className="mr-2 absolute inset-0 m-auto" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.81048 0H1.97899C1.15885 0 0.687426 0.932936 1.17394 1.5932L5.08968 6.90742C5.48935 7.44983 6.30013 7.44983 6.69979 6.90742L10.6155 1.5932C11.102 0.932935 10.6306 0 9.81048 0Z" fill="#C4C4C4" />
            </svg>
            <input value={"Johndoe.near"} class="text-sm font-semibold text-center text-gray-700 w-full h-full py-3 px-12 " />
          </div>
          <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7811 5.41991L12.193 5.41666C8.57031 5.40799 5.42539 8.35141 5.40048 11.9167V16.0225C5.40048 16.8783 5.29214 17.7136 4.82523 18.4253L4.51431 18.8998C4.04089 19.6192 4.55006 20.5833 5.40048 20.5833H20.5996C21.4501 20.5833 21.9581 19.6192 21.4858 18.8998L21.1749 18.4253C20.7091 17.7136 20.5996 16.8772 20.5996 16.0214V11.9177C20.5563 8.35141 17.4038 5.42858 13.7811 5.41991V5.41991Z" fill="#BEBEC2" />
            <path d="M16.25 20.5833C16.25 21.4453 15.9076 22.2719 15.2981 22.8814C14.6886 23.4909 13.862 23.8333 13 23.8333C12.138 23.8333 11.3114 23.4909 10.7019 22.8814C10.0924 22.2719 9.75 21.4453 9.75 20.5833" fill="#6F6E73" />
            <path d="M12.9999 2.16667C13.5746 2.16667 14.1257 2.39494 14.532 2.80127C14.9383 3.2076 15.1666 3.7587 15.1666 4.33334V5.41667H10.8333V4.33334C10.8333 3.7587 11.0615 3.2076 11.4679 2.80127C11.8742 2.39494 12.4253 2.16667 12.9999 2.16667Z" fill="#6F6E73" />
            <circle cx="19.5" cy="9.75" r="3.75" fill="#DD736D" stroke="#F5F5F5" />
          </svg>
          <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1667 3.54142C15.1667 2.78201 14.5514 2.16667 13.792 2.16667H12.2092C11.4487 2.16667 10.8334 2.78201 10.8334 3.54142C10.8334 4.16759 10.4044 4.70492 9.8205 4.93459C9.72841 4.97142 9.63633 5.01042 9.54642 5.04942C8.97117 5.29859 8.28758 5.22276 7.84341 4.77967C7.58563 4.52207 7.2361 4.37736 6.87166 4.37736C6.50723 4.37736 6.1577 4.52207 5.89991 4.77967L4.77975 5.89984C4.52214 6.15763 4.37744 6.50715 4.37744 6.87159C4.37744 7.23603 4.52214 7.58555 4.77975 7.84334V7.84334C5.22392 8.28751 5.29975 8.97001 5.04841 9.54634C5.00893 9.63704 4.971 9.72841 4.93466 9.82042C4.705 10.4043 4.16766 10.8333 3.5415 10.8333C2.78208 10.8333 2.16675 11.4487 2.16675 12.2081V13.7919C2.16675 14.5513 2.78208 15.1667 3.5415 15.1667C4.16766 15.1667 4.705 15.5957 4.93466 16.1796C4.9715 16.2717 5.0105 16.3638 5.04841 16.4537C5.29866 17.0289 5.22283 17.7125 4.77975 18.1567C4.52214 18.4145 4.37744 18.764 4.37744 19.1284C4.37744 19.4929 4.52214 19.8424 4.77975 20.1002L5.89991 21.2203C6.1577 21.4779 6.50723 21.6227 6.87166 21.6227C7.2361 21.6227 7.58563 21.4779 7.84341 21.2203C8.28758 20.7762 8.97008 20.7003 9.54642 20.9506C9.63633 20.9907 9.72841 21.0286 9.8205 21.0654C10.4044 21.2951 10.8334 21.8324 10.8334 22.4586C10.8334 23.218 11.4487 23.8333 12.2082 23.8333H13.792C14.5514 23.8333 15.1667 23.218 15.1667 22.4586C15.1667 21.8324 15.5957 21.2951 16.1797 21.0643C16.2717 21.0286 16.3638 20.9907 16.4537 20.9517C17.029 20.7003 17.7126 20.7773 18.1557 21.2203C18.2833 21.3481 18.4349 21.4494 18.6017 21.5185C18.7686 21.5876 18.9474 21.6232 19.128 21.6232C19.3085 21.6232 19.4874 21.5876 19.6542 21.5185C19.821 21.4494 19.9726 21.3481 20.1002 21.2203L21.2204 20.1002C21.478 19.8424 21.6227 19.4929 21.6227 19.1284C21.6227 18.764 21.478 18.4145 21.2204 18.1567V18.1567C20.7762 17.7125 20.7004 17.03 20.9507 16.4537C20.9907 16.3638 21.0287 16.2717 21.0655 16.1796C21.2952 15.5957 21.8325 15.1667 22.4587 15.1667C23.2181 15.1667 23.8334 14.5513 23.8334 13.7919V12.2092C23.8334 11.4498 23.2181 10.8344 22.4587 10.8344C21.8325 10.8344 21.2952 10.4054 21.0644 9.82151C21.0281 9.72948 20.9902 9.63811 20.9507 9.54742C20.7015 8.97217 20.7773 8.28859 21.2204 7.84442C21.478 7.58663 21.6227 7.23711 21.6227 6.87267C21.6227 6.50823 21.478 6.15871 21.2204 5.90092L20.1002 4.78076C19.8425 4.52315 19.4929 4.37845 19.1285 4.37845C18.7641 4.37845 18.4145 4.52315 18.1567 4.78076V4.78076C17.7126 5.22492 17.0301 5.30076 16.4537 5.05051C16.3631 5.01065 16.2717 4.97236 16.1797 4.93567C15.5957 4.70492 15.1667 4.16759 15.1667 3.54251V3.54142Z" fill="#BEBEC2" />
            <path d="M17.3334 13C17.3334 14.1493 16.8769 15.2515 16.0642 16.0641C15.2516 16.8768 14.1494 17.3333 13.0001 17.3333C11.8508 17.3333 10.7486 16.8768 9.93595 16.0641C9.12329 15.2515 8.66675 14.1493 8.66675 13C8.66675 11.8507 9.12329 10.7485 9.93595 9.93588C10.7486 9.12322 11.8508 8.66667 13.0001 8.66667C14.1494 8.66667 15.2516 9.12322 16.0642 9.93588C16.8769 10.7485 17.3334 11.8507 17.3334 13V13Z" fill="#6F6E73" />
          </svg>
        </div>
      </header>
      <main className='px-6 b-white'>
        <CategoryExperience />
      </main>

      {/* <footer>
       
      </footer> */}
    </div>
  )
}
