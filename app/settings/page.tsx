'use client'
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import React, { useState } from 'react';
import MobileHeader from '@/components/TabAndMobHeader/mobileHeader';
import TabletHeader from '@/components/TabAndMobHeader/tabletHeader';
import profile from "@/public/assets/images/settings/profile.svg"
import edit from "@/public/assets/images/settings/EditButton.svg"
import switchProfile from "@/public/assets/images/settings/SwitchProfileButton.svg"
import Accounttype from "@/public/assets/images/settings/Accounttype.svg"
import pin from "@/public/assets/images/settings/PINChange.svg"
import Image from 'next/image';
import CustomButton from '@/components/custom/CustomButton';
import styles from './Settings.module.css';
export default function SettingsPage() {
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false);
  return (
    <div className="min-h-screen bg-[#0A0C0F] overflow-x-hidden">
      {/* Header Section */}
      <section className="fixed top-0 left-0 w-full z-50 overflow-x-hidden">
        {/* Mobile Header - Show on xs and sm (up to md breakpoint) */}
        <div className="block md:hidden">
          <MobileHeader />
        </div>
        {/* Tablet Header - Show on md only */}
        <div className="hidden md:block lg:hidden">
          <TabletHeader />
        </div>
        {/* Desktop Header - Show on lg and up */}
        <div className="hidden lg:block">
          <Header />
        </div>
      </section>

      {/* Main Settings Content */}
      <div className="pt-20 lg:pt-24">
        {/* Settings Container */}
        <div 
          className="mx-auto bg-[#0A0C0F] px-4 sm:px-6 lg:px-8"
          style={{
            maxWidth: '949px',
            minHeight: '1199px',
            marginTop: '120px',
            gap: '40px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
                {/* Enhanced Profile Section */}
        <div 
          className="flex flex-row items-center gap-4 sm:gap-8 w-full h-auto sm:h-[168px]"
        >
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <button className={`${styles.profile} sm:p-[30px] p-[20px] rounded-[12px] border-2 border-[#4D4D4D] border-t-0 shadow-[0px_-1px_0px_#666666] `}> 
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.737 36.0678C37.1979 31.564 33.2331 28.0546 28.4809 26.1048C30.8442 24.3135 32.5898 21.816 33.4706 18.9663C34.3514 16.1165 34.3227 13.0589 33.3885 10.2266C32.4544 7.39423 30.6622 4.93074 28.2657 3.18506C25.8693 1.43937 22.9901 0.5 20.0361 0.5C17.0821 0.5 14.2029 1.43937 11.8065 3.18506C9.41002 4.93074 7.61778 7.39423 6.68364 10.2266C5.74949 13.0589 5.72078 16.1165 6.60158 18.9663C7.48238 21.816 9.22803 24.3135 11.5913 26.1048C6.83904 28.0546 2.87427 31.564 0.335181 36.0678C0.17785 36.3235 0.0729899 36.6085 0.026834 36.906C-0.0193219 37.2034 -0.00583119 37.5072 0.0665044 37.7993C0.13884 38.0914 0.268544 38.3658 0.447905 38.6062C0.627265 38.8466 0.852622 39.0481 1.11058 39.1987C1.36853 39.3494 1.65382 39.446 1.94948 39.483C2.24514 39.52 2.54513 39.4965 2.83163 39.4139C3.11812 39.3314 3.38527 39.1915 3.6172 39.0025C3.84912 38.8135 4.04107 38.5793 4.18166 38.3138C7.53737 32.4517 13.4636 28.9554 20.0361 28.9554C26.6086 28.9554 32.5348 32.4536 35.8905 38.3138C36.1952 38.809 36.6784 39.1649 37.2381 39.3065C37.7977 39.4481 38.3899 39.3642 38.8894 39.0725C39.3889 38.7808 39.7567 38.3042 39.9148 37.7435C40.073 37.1828 40.0092 36.5819 39.737 36.0678ZM10.406 14.7305C10.406 12.8055 10.9708 10.9238 12.029 9.32323C13.0871 7.72268 14.5912 6.4752 16.3508 5.73855C18.1105 5.00189 20.0468 4.80915 21.9148 5.1847C23.7829 5.56024 25.4988 6.4872 26.8456 7.84836C28.1924 9.20951 29.1096 10.9437 29.4811 12.8317C29.8527 14.7197 29.662 16.6766 28.9331 18.4551C28.2042 20.2335 26.9699 21.7536 25.3863 22.823C23.8026 23.8925 21.9407 24.4633 20.0361 24.4633C17.4829 24.4603 15.0352 23.434 13.2298 21.6093C11.4245 19.7847 10.409 17.3109 10.406 14.7305Z" fill="white"/>
              </svg>
            </button>
          </div>

            {/* Profile Info - Two Column Layout */}
            <div className="flex flex-col justify-start h-full gap-4 w-full pt-8">
    
                  {/* Row 1: Username and Edit Button */}
                  <div className="flex flex-row items-center gap-4">
                    {/* Username */}
                      <h3 
                       className="text-white font-bold text-xl sm:text-2xl leading-none text-left"
                       style={{
                         fontSize: 'clamp(20px, 4vw, 32px)',
                         lineHeight: '100%',
                         letterSpacing: '0%'
                       }}
                     >
                       Username
                     </h3>
      
                      {/* Edit Button */}
                      <button 
                        className={`${styles.blackGradient} rounded-[12px] transition-all duration-200 hover:scale-110 active:scale-95`}
                        aria-label="Edit profile"
                                style={{
                          width: '40px',
                          height: '40px',
                          gap: '10px',
                          opacity: 1,
                          paddingRight: '0px',
                          paddingLeft: '0px',
                                background: `
                                  radial-gradient(20% 20% at 0% 0%, rgba(255, 255, 255, 0.0213) 0%, rgba(250, 250, 255, 0.0355) 30%, rgba(255, 250, 250, 0.0142) 60%, rgba(252, 252, 255, 0) 100%),
                                  radial-gradient(38.46% 38.46% at 11.54% 19.23%, rgba(255, 235, 255, 0.0096) 0%, rgba(230, 255, 240, 0.0064) 70%, rgba(240, 240, 255, 0) 100%),
                                  linear-gradient(316.97deg, rgba(255, 255, 255, 0.132) 17.24%, rgba(255, 255, 255, 0) 58.62%, rgba(217, 235, 255, 0.024) 86.21%),
                                  linear-gradient(0deg, rgba(255, 255, 255, 0.198) 0%, rgba(255, 255, 255, 0.066) 30%, rgba(255, 255, 255, 0) 70%, rgba(224, 237, 255, 0.02) 100%),
                                  linear-gradient(0deg, rgba(255, 255, 255, 0.1395), rgba(255, 255, 255, 0.1395))
                                `,
                                borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.297) 50%, rgba(255, 255, 255, 0.132) 68%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.1155) 132%, rgba(255, 255, 255, 0.264) 150%)',
                                boxShadow: `
                                  0px 0px 1.57px 0px #F2F2FF0E inset,
                                  0.1px 0px 1.5px 0px #FF264003 inset,
                                  -0.1px 0px 1.5px 0px #2673FF04 inset,
                                  0px 1.5px 3.99px 0px #FFFFFF4C inset,
                                  0.2px 0.32px 8.64px 0px #D1E5FF0A inset,
                                  0px 3px 12px -3px #00000027,
                                  0px 10.24px 28.4px -6px #00000041,
                                  0px 0px 45.5px 0px #FFFFFF0F
                                `,
                                backdropFilter: 'blur(26.399999618530273px)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                                                                       {/* Pencil Icon */}
                                    <svg 
                                      width="16.25" 
                                      height="16.25" 
                                      viewBox="0 0 17 17" 
                                      fill="none" 
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path 
                                        d="M15.9797 4.51094L12.4891 1.01953C12.344 0.874372 12.1717 0.759222 11.9821 0.680659C11.7925 0.602097 11.5892 0.561661 11.384 0.561661C11.1787 0.561661 10.9755 0.602097 10.7859 0.680659C10.5963 0.759222 10.424 0.874372 10.2789 1.01953L0.645319 10.6539C0.499696 10.7986 0.384242 10.9707 0.305654 11.1603C0.227066 11.35 0.186908 11.5533 0.187507 11.7586V15.25C0.187507 15.6644 0.352127 16.0618 0.645152 16.3549C0.938178 16.6479 1.33561 16.8125 1.75001 16.8125H5.24141C5.44668 16.8131 5.65001 16.7729 5.83963 16.6943C6.02926 16.6157 6.2014 16.5003 6.3461 16.3547L15.9797 6.72031C16.2726 6.4273 16.4372 6.02994 16.4372 5.61562C16.4372 5.2013 16.2726 4.80395 15.9797 4.51094ZM5.10938 14.9375H2.06251V11.8906L8.62501 5.32812L11.6719 8.375L5.10938 14.9375ZM13 7.04687L9.95313 4L11.3859 2.56719L14.4328 5.61406L13 7.04687Z" 
                                        fill="white"
                                      />
                                    </svg>
                                    </button>
                                  </div>

                                                             {/* Row 2: Switch Profile Button */}
                               <div className="w-[130px] sm:w-auto">
                                 <button 
                                   className={`${styles.gradientButton} flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 w-full sm:w-[128px]`}
                                   aria-label="Switch profile"
                                   style={{
                                     height: '40px',
                                     gap: '8px',
                                     borderRadius: '12px',
                                     border: '1.2px solid',
                                     paddingRight: '16px',
                                     paddingLeft: '16px',
                                     background: `
                                       radial-gradient(20% 20% at 0% 0%, rgba(255, 255, 255, 0.0213) 0%, rgba(250, 250, 255, 0.0355) 30%, rgba(255, 250, 250, 0.0142) 60%, rgba(252, 252, 255, 0) 100%),
                                       radial-gradient(38.46% 38.46% at 11.54% 19.23%, rgba(255, 235, 255, 0.0096) 0%, rgba(230, 255, 240, 0.0064) 70%, rgba(240, 240, 255, 0) 100%),
                                       linear-gradient(316.97deg, rgba(255, 255, 255, 0.132) 17.24%, rgba(255, 255, 255, 0) 58.62%, rgba(217, 235, 255, 0.024) 86.21%),
                                       linear-gradient(0deg, rgba(255, 255, 255, 0.198) 0%, rgba(255, 255, 255, 0.066) 30%, rgba(255, 255, 255, 0) 70%, rgba(224, 237, 255, 0.02) 100%),
                                       linear-gradient(0deg, rgba(255, 255, 255, 0.1395), rgba(255, 255, 255, 0.1395))
                                     `,
                                     borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.297) 50%, rgba(255, 255, 255, 0.132) 68%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.1155) 132%, rgba(255, 255, 255, 0.264) 150%)',
                                     boxShadow: `
                                       0px 0px 1.57px 0px #F2F2FF0E inset,
                                       0.1px 0px 1.5px 0px #FF264003 inset,
                                       -0.1px 0px 1.5px 0px #2673FF04 inset,
                                       0px 1.5px 3.99px 0px #FFFFFF4C inset,
                                       0.2px 0.32px 8.64px 0px #D1E5FF0A inset,
                                       0px 3px 12px -3px #00000027,
                                       0px 10.24px 28.4px -6px #00000041,
                                       0px 0px 45.5px 0px #FFFFFF0F
                                     `,
                                     backdropFilter: 'blur(26.399999618530273px)',
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center'
                                   }}
                                 >
                                                                       {/* Switch Profile Text */}
                                    <span 
                                      style={{
                                        fontFamily: 'Cairo',
                                        fontWeight: 700,
                                        fontStyle: 'normal',
                                        fontSize: '12px',
                                        lineHeight: '100%',
                                        letterSpacing: '0%',
                                        textAlign: 'center',
                                        verticalAlign: 'middle',
                                        color: '#FFFFFF',
                                        whiteSpace: 'nowrap'
                                      }}
                                    >
                                      Switch Profile
                                    </span>
                                   
                                   {/* Switch Profile Icon */}
                                   <svg 
                                     width="24" 
                                     height="22" 
                                     viewBox="0 0 24 22" 
                                     fill="none" 
                                     xmlns="http://www.w3.org/2000/svg"
                                   >
                                     <path 
                                       d="M19.9764 15.4969C19.8563 15.4074 19.7203 15.3432 19.5761 15.3081C19.432 15.273 19.2826 15.2676 19.1365 15.2924C18.9904 15.3171 18.8505 15.3714 18.7246 15.4522C18.5988 15.533 18.4896 15.6387 18.4033 15.7633C18.3113 15.8968 18.2159 16.0264 18.117 16.1521C17.4421 14.9814 16.4675 14.027 15.3011 13.3945C15.898 12.7287 16.2942 11.8969 16.4411 11.0012C16.588 10.1056 16.4792 9.18499 16.128 8.35246C15.7769 7.51993 15.1986 6.81167 14.4643 6.31462C13.73 5.81757 12.8715 5.55335 11.9942 5.55439C11.1169 5.55542 10.259 5.82166 9.52577 6.32045C8.79253 6.81923 8.21586 7.52884 7.86653 8.3622C7.5172 9.19556 7.41041 10.1164 7.55926 11.0117C7.70812 11.907 8.10615 12.7379 8.70449 13.4023C7.53978 14.034 6.56408 14.9835 5.88299 16.1482C4.92946 14.9374 4.3331 13.4677 4.16531 11.9151C4.38904 12.113 4.67866 12.2124 4.97223 12.192C5.26581 12.1716 5.54002 12.0331 5.73623 11.806C5.93244 11.5789 6.03506 11.2814 6.02214 10.977C6.00922 10.6726 5.88179 10.3855 5.66711 10.1771L3.78987 8.23309C3.68522 8.12435 3.56088 8.03807 3.42397 7.97919C3.28706 7.92032 3.14028 7.89002 2.99204 7.89002C2.84379 7.89002 2.69701 7.92032 2.5601 7.97919C2.42319 8.03807 2.29885 8.12435 2.19421 8.23309L0.316961 10.1771C0.112519 10.3959 -0.00122846 10.6888 9.54223e-06 10.9932C0.00124755 11.2976 0.117373 11.5895 0.323587 11.8065C0.529801 12.0234 0.80976 12.1483 1.10368 12.1545C1.3976 12.1606 1.68218 12.0475 1.89666 11.8393C2.00329 13.2144 2.3709 14.5543 2.97845 15.7821C3.58599 17.0099 4.42152 18.1015 5.43715 18.9943C5.49093 19.0511 5.55004 19.1022 5.61361 19.1469C7.42393 20.6733 9.68817 21.5046 12.0227 21.5C14.3571 21.4954 16.6183 20.6551 18.423 19.1216C18.4651 19.0899 18.5052 19.0555 18.5431 19.0186C19.1794 18.4625 19.7469 17.8272 20.2327 17.127C20.3194 17.0026 20.3815 16.8617 20.4156 16.7124C20.4496 16.5631 20.4549 16.4083 20.4311 16.2569C20.4073 16.1055 20.3549 15.9604 20.2769 15.83C20.1988 15.6996 20.0967 15.5864 19.9764 15.4969ZM11.9981 7.88997C12.4437 7.88997 12.8792 8.02678 13.2497 8.28312C13.6201 8.53945 13.9088 8.90379 14.0793 9.33006C14.2498 9.75633 14.2945 10.2254 14.2075 10.6779C14.1206 11.1304 13.9061 11.5461 13.591 11.8724C13.276 12.1986 12.8746 12.4208 12.4376 12.5108C12.0006 12.6008 11.5477 12.5546 11.1361 12.3781C10.7244 12.2015 10.3726 11.9025 10.1251 11.5189C9.87755 11.1352 9.74543 10.6842 9.74543 10.2228C9.74543 9.60409 9.98276 9.01073 10.4052 8.57324C10.8277 8.13575 11.4007 7.88997 11.9981 7.88997ZM11.9981 19.1653C10.4275 19.1673 8.89259 18.6807 7.59223 17.7685C7.98897 16.9066 8.61337 16.1787 9.39312 15.669C10.1729 15.1594 11.0761 14.8889 11.9981 14.8889C12.9202 14.8889 13.8234 15.1594 14.6031 15.669C15.3829 16.1787 16.0073 16.9066 16.404 17.7685C15.1023 18.6777 13.5682 19.164 11.9981 19.1653ZM23.683 11.8257L21.8058 13.7697C21.7012 13.8784 21.5768 13.9647 21.4399 14.0236C21.303 14.0824 21.1562 14.1127 21.008 14.1127C20.8597 14.1127 20.7129 14.0824 20.576 14.0236C20.4391 13.9647 20.3148 13.8784 20.2101 13.7697L18.3329 11.8257C18.1182 11.6173 17.9908 11.3302 17.9779 11.0258C17.9649 10.7214 18.0676 10.4238 18.2638 10.1968C18.46 9.96971 18.7342 9.83117 19.0278 9.81078C19.3213 9.7904 19.611 9.88979 19.8347 10.0877C19.6576 8.44678 19.0042 6.90003 17.9608 5.65153C16.9174 4.40304 15.5331 3.51146 13.9903 3.09446C12.4476 2.67745 10.8191 2.7546 9.31955 3.31573C7.82003 3.87686 6.52004 4.89561 5.59108 6.23754C5.50684 6.36705 5.39834 6.47772 5.27202 6.56299C5.14569 6.64827 5.00413 6.70641 4.8557 6.73396C4.70728 6.76152 4.55503 6.75793 4.40797 6.72342C4.26091 6.6889 4.12204 6.62416 3.99959 6.53303C3.87715 6.4419 3.77362 6.32623 3.69514 6.19289C3.61667 6.05956 3.56484 5.91126 3.54275 5.75679C3.52065 5.60232 3.52872 5.44483 3.5665 5.29366C3.60427 5.14248 3.67097 5.0007 3.76265 4.87672C4.97371 3.1293 6.67387 1.80929 8.63311 1.09528C10.5923 0.381273 12.7161 0.307735 14.717 0.884614C16.7179 1.46149 18.4994 2.66094 19.8205 4.32069C21.1416 5.98044 21.9385 8.02036 22.1033 10.1645C22.3178 9.95627 22.6024 9.84315 22.8963 9.84928C23.1902 9.85541 23.4702 9.98029 23.6764 10.1973C23.8826 10.4142 23.9988 10.7061 24 11.0105C24.0012 11.315 23.8875 11.6079 23.683 11.8266L23.683 11.8257Z" 
                                       fill="white"
                                     />
                                   </svg>
                                 </button>
                               </div>
             </div>
             </div>

          {/* Divider */}
          <div 
            className="w-full"
            style={{
              height: '2px',
              background: '#D9D9D980',
              opacity: 1
            }}
          />

                         {/* Subscription Section */}
            <section className="flex-1 w-full opacity-100">
              <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">Subscription :</h2>
              
              {/* Subscription Details */}
              <div className="space-y-1">
                {/* Started Date */}
                <div className="flex items-center">
                  <span className="text-white font-medium">Started : 25 / 7 / 2025</span>
                </div>
                
                {/* Ends Date */}
                <div className="flex items-center">
                  <span className="text-white font-medium">Ends : 25 / 8 / 2025</span>
                </div>
                
                                 {/* SVG Button Row */}
                 <div className="flex mb-9">
                   <button 
                     className="transition-all duration-200 hover:scale-105 active:scale-95 w-[40px] sm:w-[45px]"
                     aria-label="Account Type"
                     style={{
                       height: '40px',
                       gap: '8px',
                       opacity: 1,
                       borderRadius: '12px',
                       border: '1.2px solid',
                       paddingRight: '16px',
                       paddingLeft: '16px',
                       background: `
                         radial-gradient(20% 20% at 0% 0%, rgba(255, 255, 255, 0.0213) 0%, rgba(250, 250, 255, 0.0355) 30%, rgba(255, 250, 250, 0.0142) 60%, rgba(252, 252, 255, 0) 100%),
                         radial-gradient(38.46% 38.46% at 11.54% 19.23%, rgba(255, 235, 255, 0.0096) 0%, rgba(230, 255, 240, 0.0064) 70%, rgba(240, 240, 255, 0) 100%),
                         linear-gradient(316.97deg, rgba(255, 255, 255, 0.132) 17.24%, rgba(255, 255, 255, 0) 58.62%, rgba(217, 235, 255, 0.024) 86.21%),
                         linear-gradient(0deg, rgba(255, 255, 255, 0.198) 0%, rgba(255, 255, 255, 0.066) 30%, rgba(255, 255, 255, 0) 70%, rgba(224, 237, 255, 0.02) 100%),
                         linear-gradient(0deg, rgba(255, 255, 255, 0.1395), rgba(255, 255, 255, 0.1395))
                       `,
                       borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.297) 50%, rgba(255, 255, 255, 0.132) 68%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.1155) 132%, rgba(255, 255, 255, 0.264) 150%)',
                       boxShadow: `
                         0px 0px 1.57px 0px #F2F2FF0E inset,
                         0.1px 0px 1.5px 0px #FF264003 inset,
                         -0.1px 0px 1.5px 0px #2673FF04 inset,
                         0px 1.5px 3.99px 0px #FFFFFF4C inset,
                         0.2px 0.32px 8.64px 0px #D1E5FF0A inset,
                         0px 3px 12px -3px #00000027,
                         0px 10.24px 28.4px -6px #00000041,
                         0px 0px 45.5px 0px #FFFFFF0F
                       `,
                       backdropFilter: 'blur(26.399999618530273px)',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}
                   >
                     {/* Account Type Text */}
                     <span 
                       style={{
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontSize: '12px',
                         lineHeight: '100%',
                         letterSpacing: '0%',
                         textAlign: 'center',
                         verticalAlign: 'middle',
                         color: '#FFFFFF',
                         whiteSpace: 'nowrap'
                       }}
                     >
                       Duo
                     </span>
                   </button>
                 </div>
                
                {/* Subscription Warning */}
                <div 
                  className="flex items-start gap-3 p-4 rounded-lg"
                >
                  {/* Warning SVG Icon */}
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 2L1 21H23L12 2Z" 
                      stroke="#FAB605" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M12 9V13" 
                      stroke="#FAB605" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <circle 
                      cx="12" 
                      cy="17" 
                      r="1" 
                      fill="#FAB605"
                    />
                  </svg>
                  
                  {/* Warning Text */}
                  <span className="text-[#FAB605] font-medium">
                    Subscription ends soon please check the payment gate for renewal
                  </span>
                </div>
              </div>
            </section>

          {/* Divider */}
          <div 
            className="w-full"
            style={{
              height: '2px',
              background: '#D9D9D980',
              opacity: 1
            }}
          />

            {/* PIN Change Section */}
          
             {/* PIN Change Button */}
           
           <CustomButton className='flex gap-3 items-center w-[fit-content] p-[16px] md:text-[24px] sm:text-[12px] rounded-[12px] border-[2px] transition-all duration-200' to='#'>
              Change PIN               
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8787 6.28639L15.2135 2.62041C15.0612 2.46799 14.8803 2.34709 14.6812 2.2646C14.4821 2.18211 14.2687 2.13965 14.0532 2.13965C13.8377 2.13965 13.6243 2.18211 13.4252 2.2646C13.2261 2.34709 13.0452 2.46799 12.8929 2.62041L2.77758 12.7365C2.62468 12.8884 2.50345 13.0692 2.42094 13.2683C2.33842 13.4674 2.29625 13.6809 2.29688 13.8964L2.29688 17.5624C2.29688 17.9975 2.46973 18.4148 2.77741 18.7225C3.08509 19.0302 3.50239 19.203 3.93751 19.203H7.60348C7.81901 19.2036 8.03251 19.1614 8.23161 19.0789C8.43072 18.9964 8.61147 18.8752 8.7634 18.7223L18.8787 8.60623C19.1862 8.29857 19.359 7.88134 19.359 7.44631C19.359 7.01127 19.1862 6.59405 18.8787 6.28639ZM7.46485 17.2343H4.26563L4.26563 14.0351L11.1563 7.14443L14.3555 10.3437L7.46485 17.2343ZM15.75 8.94912L12.5508 5.7499L14.0552 4.24545L17.2545 7.44467L15.75 8.94912Z" fill="white"/>
              </svg>

           </CustomButton>
           

          {/* Divider */}
          <div 
            className="w-full"
            style={{
              height: '2px',
              background: '#D9D9D980',
              opacity: 1
            }}
          />

                     {/* Language Section */}
           <div className="flex-1">
             <h2 className="text-white text-2xl font-semibold mb-4">Language :</h2>
             {/* Language Selection Button */}
             <div className="flex w-full">
               <button 
                 className={`${styles.gradientButton} flex items-center justify-center gap-2 active:scale-95 w-[180px] sm:w-[174px]`}
                 aria-label="Language Selection"
                 style={{
                   height: '60px',
                   gap: '10px',
                   borderRadius: '12px',
                   border: '1.2px solid',
                   paddingRight: '24px',
                   paddingLeft: '24px',
                   background: `
                     radial-gradient(20% 20% at 0% 0%, rgba(255, 255, 255, 0.0213) 0%, rgba(250, 250, 255, 0.0355) 30%, rgba(255, 250, 250, 0.0142) 60%, rgba(252, 252, 255, 0) 100%),
                     radial-gradient(38.46% 38.46% at 11.54% 19.23%, rgba(255, 235, 255, 0.0096) 0%, rgba(230, 255, 240, 0.0064) 70%, rgba(240, 240, 255, 0) 100%),
                     linear-gradient(316.97deg, rgba(255, 255, 255, 0.132) 17.24%, rgba(255, 255, 255, 0) 58.62%, rgba(217, 235, 255, 0.024) 86.21%),
                     linear-gradient(0deg, rgba(255, 255, 255, 0.198) 0%, rgba(255, 255, 255, 0.066) 30%, rgba(255, 255, 255, 0) 70%, rgba(224, 237, 255, 0.02) 100%),
                     linear-gradient(0deg, rgba(255, 255, 255, 0.1395), rgba(255, 255, 255, 0.1395))
                   `,
                   borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.297) 50%, rgba(255, 255, 255, 0.132) 68%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.1155) 132%, rgba(255, 255, 255, 0.264) 150%)',
                   boxShadow: `
                     0px 0px 1.57px 0px #F2F2FF0E inset,
                     0.1px 0px 1.5px 0px #FF264003 inset,
                     -0.1px 0px 1.5px 0px #2673FF04 inset,
                     0px 1.5px 3.99px 0px #FFFFFF4C inset,
                     0.2px 0.32px 8.64px 0px #D1E5FF0A inset,
                     0px 3px 12px -3px #00000027,
                     0px 10.24px 28.4px -6px #00000041,
                     0px 0px 45.5px 0px #FFFFFF0F
                   `,
                   backdropFilter: 'blur(26.399999618530273px)',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}
               >
                 {/* Language Text */}
                 <span 
                 className='text-14 md:text-[24px]' 
                   style={{
                     fontFamily: 'Cairo',
                     fontWeight: 700,
                     fontStyle: 'normal',
                     //fontSize: '24px',
                     lineHeight: '100%',
                     letterSpacing: '0%',
                     textAlign: 'center',
                     verticalAlign: 'middle',
                     color: '#FFFFFF',
                     whiteSpace: 'nowrap'
                   }}
                 >
                   Language
                 </span>
                 
                 {/* Arrow Icon */}
                 <svg 
                   width="15" 
                   height="16" 
                   viewBox="0 0 15 16" 
                   fill="none" 
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path 
                     d="M7.5 15.5C7.30412 15.5006 7.11146 15.4412 6.94074 15.3277C6.77002 15.2142 6.62707 15.0504 6.52577 14.8523L0.169823 2.57273C0.0625582 2.3657 0.00400066 2.12858 0.000197411 1.88586C-0.00360584 1.64314 0.0474834 1.40363 0.148189 1.19204C0.247331 0.982479 0.391912 0.807905 0.567065 0.686275C0.74222 0.564645 0.941626 0.50035 1.14478 0.499999L13.8552 0.5C14.0584 0.50035 14.2578 0.564646 14.4329 0.686276C14.6081 0.807906 14.7527 0.98248 14.8518 1.19205C14.9525 1.40363 15.0036 1.64314 14.9998 1.88586C14.996 2.12858 14.9374 2.3657 14.8302 2.57273L8.47423 14.8523C8.37293 15.0504 8.22998 15.2142 8.05926 15.3277C7.88854 15.4412 7.69588 15.5006 7.5 15.5Z" 
                     fill="white"
                   />
                 </svg>
               </button>
             </div>
           </div>

          {/* Divider */}
          <div 
            className="w-full"
            style={{
              height: '2px',
              background: '#D9D9D980',
              opacity: 1
            }}
          />

          {/* Age Restriction Section */}
          <div className="flex-1">
            <h2 className="text-white text-xl md:text-3xl font-semibold mb-4">Age Restriction</h2>
            {/* Age Restriction content will go here */}
            <div className="flex w-full">
               <button 
                 className={`${styles.gradientButton} flex items-center justify-center gap-2 active:scale-95 w-[210px] sm:w-[232px]`}
                 aria-label="Age Restriction"
                 style={{
                   height: '60px',
                   gap: '10px',
                   borderRadius: '12px',
                   border: '1.2px solid',
                   paddingRight: '24px',
                   paddingLeft: '24px',
                   background: `
                     radial-gradient(20% 20% at 0% 0%, rgba(255, 255, 255, 0.0213) 0%, rgba(250, 250, 255, 0.0355) 30%, rgba(255, 250, 250, 0.0142) 60%, rgba(252, 252, 255, 0) 100%),
                     radial-gradient(38.46% 38.46% at 11.54% 19.23%, rgba(255, 235, 255, 0.0096) 0%, rgba(230, 255, 240, 0.0064) 70%, rgba(240, 240, 255, 0) 100%),
                     linear-gradient(316.97deg, rgba(255, 255, 255, 0.132) 17.24%, rgba(255, 255, 255, 0) 58.62%, rgba(217, 235, 255, 0.024) 86.21%),
                     linear-gradient(0deg, rgba(255, 255, 255, 0.198) 0%, rgba(255, 255, 255, 0.066) 30%, rgba(255, 255, 255, 0) 70%, rgba(224, 237, 255, 0.02) 100%),
                     linear-gradient(0deg, rgba(255, 255, 255, 0.1395), rgba(255, 255, 255, 0.1395))
                   `,
                   borderImageSource: 'linear-gradient(0deg, rgba(255, 255, 255, 0.297) 50%, rgba(255, 255, 255, 0.132) 68%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.1155) 132%, rgba(255, 255, 255, 0.264) 150%)',
                   boxShadow: `
                     0px 0px 1.57px 0px #F2F2FF0E inset,
                     0.1px 0px 1.5px 0px #FF264003 inset,
                     -0.1px 0px 1.5px 0px #2673FF04 inset,
                     0px 1.5px 3.99px 0px #FFFFFF4C inset,
                     0.2px 0.32px 8.64px 0px #D1E5FF0A inset,
                     0px 3px 12px -3px #00000027,
                     0px 10.24px 28.4px -6px #00000041,
                     0px 0px 45.5px 0px #FFFFFF0F
                   `,
                   backdropFilter: 'blur(26.399999618530273px)',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}
               >
                 {/* Language Text */}
                 <span
                 className='text-14 md:text-[24px]' 
                   style={{
                     fontFamily: 'Cairo',
                     fontWeight: 700,
                     fontStyle: 'normal',
                     //fontSize: '24px',
                     lineHeight: '100%',
                     letterSpacing: '0%',
                     textAlign: 'center',
                     verticalAlign: 'middle',
                     color: '#FFFFFF',
                     whiteSpace: 'nowrap'
                   }}
                 >
                   Age Restriction
                 </span>
                 
                 {/* Arrow Icon */}
                 <svg 
                   width="15" 
                   height="16" 
                   viewBox="0 0 15 16" 
                   fill="none" 
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path 
                     d="M7.5 15.5C7.30412 15.5006 7.11146 15.4412 6.94074 15.3277C6.77002 15.2142 6.62707 15.0504 6.52577 14.8523L0.169823 2.57273C0.0625582 2.3657 0.00400066 2.12858 0.000197411 1.88586C-0.00360584 1.64314 0.0474834 1.40363 0.148189 1.19204C0.247331 0.982479 0.391912 0.807905 0.567065 0.686275C0.74222 0.564645 0.941626 0.50035 1.14478 0.499999L13.8552 0.5C14.0584 0.50035 14.2578 0.564646 14.4329 0.686276C14.6081 0.807906 14.7527 0.98248 14.8518 1.19205C14.9525 1.40363 15.0036 1.64314 14.9998 1.88586C14.996 2.12858 14.9374 2.3657 14.8302 2.57273L8.47423 14.8523C8.37293 15.0504 8.22998 15.2142 8.05926 15.3277C7.88854 15.4412 7.69588 15.5006 7.5 15.5Z" 
                     fill="white"
                   />
                 </svg>
               </button>
             </div>
          </div>

          {/* Divider */}
          <div 
            className="w-full"
            style={{
              height: '2px',
              background: '#D9D9D980',
              opacity: 1
            }}
          />

                     {/* Auto Play Section */}
           <div className="flex-1">
                           {/* Auto Play Checkbox and Text */}
              <div className="flex flex-row  items-center gap-4">
                                 {/* Checkbox */}
                 <input 
                   type="checkbox"
                   checked={autoPlayEnabled}
                   onChange={(e) => setAutoPlayEnabled(e.target.checked)}
                   className="transition-all duration-200 hover:scale-105 active:scale-95"
                   style={{
                     width: '20px',
                     height: '20px',
                     opacity: 1,
                     cursor: 'pointer',
                     backgroundColor: autoPlayEnabled ? '#FFFFFF' : 'transparent',
                     border: '1px solid #FFFFFF',
                     borderRadius: '2px',
                     appearance: 'none',
                     WebkitAppearance: 'none',
                     MozAppearance: 'none',
                     outline: 'none',
                     position: 'relative'
                   }}
                 />
                
                {/* Auto Play Text */}
                <span 
                  style={{
                    width: 'auto',
                    minWidth: '133px',
                    height: '60px',
                    opacity: 1,
                    fontFamily: 'Cairo',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Auto Play
                </span>
              </div>
           </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}



