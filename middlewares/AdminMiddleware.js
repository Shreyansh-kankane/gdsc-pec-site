// 'use client';
// import React from 'react';

// import { useEffect, useState } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { useSession } from '@clerk/nextjs';
// import Loading from '@/components/Loading';
// import { useContext,createContext } from 'react';


// const UserContext = createContext();

// export const useUserRole = () => {
//   return useContext(UserContext);
// };

// const AdminMiddleware = ({ children }) => {

//   const session = useSession();
//   const pathname = usePathname();
//   const router = useRouter();

//   const { isLoaded } = session;

//   const [showLoader, setShowLoader] = useState(isLoaded);
//   const [userRole, setUserRole] = useState(null);


//   useEffect(() => {
//     let isSubscribed = true;

//     const getSessionData = () => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           if (isSubscribed) {
//             resolve(session);
//             setShowLoader(false);
//           }
//         }, 0);
//       });
//     };


//     if (session.session && session.isLoaded && session.isSignedIn) {
//       getSessionData().then((sessionData) => {
//         // console.log('Session:', sessionData);

//         // Now we have the session data, let's proceed with the middleware logic
//         const role =
//           sessionData?.session?.user?.organizationMemberships?.length > 0
//             ? sessionData.session.user.organizationMemberships[0].organization.slug
//             : null;

//         setUserRole(role);
        
//         const restrictedPaths = {
//           'eb': ['/ob','/ob/profile'],
//           'ob': ['/eb','/eb/profile'],
//         }
//         // If the user is not an admin and trying to access /admin page, redirect to the previous page
//         if (userRole && restrictedPaths[userRole] && restrictedPaths[userRole].includes(pathname)) {
//           router.push('/');
//         }
//       });
//     } else {
//       console.log('No session loaded');
//     }
//     return () => {
//       isSubscribed = false;
//     };
//   }, [pathname,userRole]);

//   if (showLoader) {
//     return <Loading />
//   }

//   // Render the children for all pages
//   return (
//     <UserContext.Provider value={userRole}>
//       {children}
//     </UserContext.Provider>
//   )

// }

// export default AdminMiddleware;



'use client'

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from '@clerk/nextjs';
import Loading from '@/components/Loading';
import { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUserRole = () => {
  return useContext(UserContext);
};

const AdminMiddleware = ({ children }) => {
  const session = useSession();
  const pathname = usePathname();
  const router = useRouter();

  // const { isLoaded } = session;

  // const [showLoader, setShowLoader] = useState(isLoaded);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    const getSessionData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (isSubscribed) {
            resolve(session);
            // setShowLoader(false);
          }
        }, 0);
      });
    };

    if (session.session && session.isLoaded && session.isSignedIn) {
      getSessionData().then((sessionData) => {
        const role =
          sessionData?.session?.user?.organizationMemberships?.length > 0
            ? sessionData.session.user.organizationMemberships[0].organization.slug
            : null;

        setUserRole(role);
      });
    } else {
      console.log('No session loaded');
    }
    return () => {
      isSubscribed = false;
    };
  }, [session.session,session.isLoaded,session.isSignedIn]);


  useEffect(() => {
    // Perform the redirection logic after userRole has been set
    if (userRole !== null) {
      const restrictedPaths = {
        'eb': ['/ob', '/ob/profile'],
        'ob': ['/eb', '/eb/profile'],
      };

      if (restrictedPaths[userRole] && restrictedPaths[userRole].includes(pathname)) {
        router.push('/');
      }
    }
  }, [pathname, userRole,router]);

  // if (showLoader) {
  //   return <Loading />;
  // }
  // Render the children for all pages
  return (
    <UserContext.Provider value={userRole}>
      {children}
    </UserContext.Provider>
  );
};

export default AdminMiddleware;
