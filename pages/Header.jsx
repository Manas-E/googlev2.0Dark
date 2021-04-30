import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from '../components/Avatar';
import HeaderOptions from '../components/HeaderOptions';

function Header() {
    
 const router = useRouter();
 const searchInputref = useRef('');
 
 const search =(e)=>{
    e.preventDefault();
    const term= searchInputref.current.value;
    console.log("==>",term);
    if(!term) return;
  
    router.push(`/search?term=${term}`);



  }

    return (
        <header className="sticky top-0 bg-gray-900 text-gray-100">
         <div  className="p-4 items-center flex w-full">
         <Image loading="lazy" src='https://lh3.googleusercontent.com/proxy/i8B8kWJpAYO35eIrRDUgPm2gdgYBowmyNsg0Cj11R1_QEWnIWoP8v93EL0G8Ao5QZ2oWyyL6gxo1U9R53iAUJUKSe9SHYMfRcX4jusRnrPmj4zqSIIt7eSl1K9mF2b4KjA'
            height={60}
            width={180} 
            onClick={()=>{router.push("/")}} 
            className="cursor-pointer"/>

            <form className="flex px-6 py-3 ml-18 mr-5 border border-gray-200 
            rounded-full shadow-lg max-w-3xl items-center flex-grow" >
                <input
                
                ref={searchInputref}
                className="flex-grow w-full focus:outline-none bg-gray-900 text-gray-100"
                 type="text"
                placeholder= {router.query.term}/>

                <XIcon onClick={()=>{searchInputref.current.value=""}} className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition
                duration-150 transform hover:scale-125"/>

                <MicrophoneIcon  className="h-7 mr-3 text-blue-500 bl-3 
                border-l-2 pl-4 border-gray-200 hidden sm:inline-flex"/>
                <SearchIcon  className="h-7 mr-3 text-blue-500  hidden sm:inline-flex "/>
                <button hidden type="submit" onClick={search} >Search</button>


            </form>

              <Avatar className='ml-auto' url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD///+RkZHAwMCrq6v19fXFxcXX19eoqKhBQUG7u7v7+/uxsbGkpKRXV1fc3NzQ0NBqamoVFRWGhoa2trbq6uolJSWXl5dTU1NgYGBNTU3l5eV2dnZbW1t/f3+enp48PDwfHx8zMzNubm42NjYrKysQEBCMjIxHR0cTExODg4Ptce57AAALiklEQVR4nN2dZ3siOwyFB0IJkFBCSAMCKdyU//8D7wzVku1x0TEmez7tLjxev4zGRZKtopFcs27npvn6POxt9TRcLp8nk8V02lzdj2fp//siYduD7s3X8K2o19vz1313kLAXqQhHrQ8Xm6qHj9YoUU9SEHZXwwC4k4arboLeoAkH/Y8ouoMm921wj6CE7daLCG+n71vo+IMjHNwj8HZaX+OeJIpwLDNOXcsOqGcQwsHqDsy31SPkQQII568p8Lb6mF8AYXeZjK/S0zgz4fg7KV+lT+ELKSLspuertBY9RwHhPG7lEqMXwZIumrC9OBtfpY/ocTWW8PasfJUez0rY3ZwdsFTckBNDODivgZ70HLOPjCC8ysRXqX8OwklGwHK5GvwYQwnHWfkqhb6NgYTT3HylFgkJZ5+56bZ6CNohhxB2cqMdFTLgBBA2c3Mp+kpBmHaXFKonOOHsITcT05vvy+hJOMoNZJCnc9WP8HLGGFV+440X4U1uFouuUYSr3CRW+eyoPAi/cnPUyGPWcBNewkLNrqmc8LIBPRBdhJdsoju5DNVB+Ji7/x5yDDf1hNe5e++lVjxhP3ffPVW7Ka4j7ObuubfqFnA1hLPc/Q5QzTK8hjAklyK37mIIn3L3Okj2/aKV8NJnei7rtGgjzOn2jdNVGOFfGmUOsow2FsIskRehNiGE6XIPUurVn/AynRZuGdc2JsJB7p5GyxS2MRE+5+5otJ79CP/eRHGSwf2mE/5dG62k26lOmDcCKtWHmzB/CFQmLbtII0ySZXhGabsMTvgXHDP1WtUTtnP3D6B2LSE60zeHPuoILzGIFq5RDSEuFz2nXuyEf32mOGhsJbyMZBK5ejbCv7pp0jW2EK5zdwymnpnwX3kLK42NhP/GQLrTk4nw35gLD5obCC9j19RbPpca/idtZ6ETXsSK9BTsFI/rbY3wEjYVajRXGtpbaYTy/r33vkt9CgysoUr41vxwQrFV3By71o71J1NPmTRPacwIpR5EEoWNRJxACSeUUDrOsI11nCtkASU8uN32hNKkixtKGDdMUELxuaMbQrjGtHZUVHz1FUv4rRLOpa1xwqgkgCmWcB9QLDA2rxHG2CkNVMuzla4VwrW0MY0wxk7RhC8nQnlMWyeMGE/RhLuV25ZQnuVsIAy3Uzjh/ZFQHjA0EIbbKZxwciSUt2UiDLZTStiS96o4EALcF0bCUDttwgm7e0LAxslIGLo+xROu9oSAewPMhI2wnRSecLgnBDRlIQyzfzxhsSNEJMpaCMPsNAHhaEuIuDzg3kIYZKc0JR1C2NoSIpxsVsIQO01AuNgSij13RQ1hI+B2ggSEDxUhxI1oJwwYxxIQlhv9AhOuqCH0bz8FYbckhLRUQ+hvp5QQc+jxpiT8RTRUR+htp5TwHtGvYloSQm4KqiX09cWmIHwpCSENUUI6dXvnsKQgLNIQDrW8JC8lIWwXYjfbVjSv85nnzfvZKf1dQISjAhPbpoTL4pM9RK91U5Jn2CkwgzIn5McevdJy6esLImwVmKPoGmHBbjz0Sa1OQtgsMOebKGE1AT0wO/XwdiUhfC0w93ZRwu2xN3bUysNOkxBOCszRA0q4y1thNwG6j9xSQtBVFcsCc/mhifA/ZqfOC26SED4VmIOUlHDv2mLnkJzbtCSE3wXmgk4jIc+bd71ZSQjXRQ/SDj3eeGyT2anDXpIQfpaMCFHCY5ss5dphp0kI3wtM1qyFkJ+Xq+91IsK18zs+ooTKr8bOIdXaaRLCTRLC99MHNEem3k6TED4kGWnerZ/U9vsPEZJz0v52+lcJ2bnOGjtN9B5iZvwaQu6lsnsvExFisrspIbuBkB21sv6miWYLzLq0lnBICa25LYlWbZi9BSXkKV/MTm3hvCSEL6D9YT0ht1PL6JZof4g5cUgJtTQTeprMZqcJYsDVHh/jp3EQ8uu4zHaahPC1wOTouwi5i3htaiQJYRPkL6WEP/oXvimh0dOehLBVYI7kOQmLW4poMp0khJ0Cc9yJEhozA5idvuvfSEI4KjDXYDjfw3LqddppEsI2KLpWu6bZi0UV9evBU8Txq/ghZGHqQ8hdxNq36C4EQ7guCSF3QnkRvlFCfQQgPknMvZuLkhDSkhchvy9Wv/11ACdcofJpHOvSg9gdldovMYETdlA5UZ6EP5RQt9MOmnBW5bUhGvIk5KEMfVGMJtxm7iH2T76EPJShzZwLLOFyS4iIc3vM+HtRQj17dwwlbG4JEUONPyGrEqPnnEEJO7A8b39CbqfaKv0VSTjYEQJcpgGEzE51C+riCN8bO0JAARn37ukkFnLT1lT727oQ6efTBuzMjMfu6SQWctO+/QUj7DRg556CCFkoQ/+BRyjCwYFQ7jMNI2QhNy2lZwMi3Lr4CsxL3Qki5CE37fNHDOHqSCg/QxpIyOxU9xXNIYTzI6HJaRImSuj+/pI+RM0tvUYQ7lLrdoRip2koIb9KVfv8FkDYVAjFicLBhCyUodtpWz44jBRC8f3d4YTsInxtgzMUu6r3+Z97Qun+IpyQHejTnZprYZcOrrs9oXQ0jSBkdoq/n3lGCKW1HmIIWcgNfcf2IVJyIBSWlIkhZCE39B3UfUYoXJtGEbJQBrhuz7Ezhz/ISlfFEbKQG7RK5q9GKBtr4ghZyA16ZdzxNMRpxy160yMJmZ2C0vMrnTJcToSifXAsIQu5YVJfKp28QYrXRJJLSwhDRkV6mgtmp0q9EoVQMudGE7LTQ6h6oMrCXvV8CUpYEcKgdfw7tVNMmt2b0qJKKHjRSepaWDs08ouxUzXNjHgvBQ+xFd9JGnJDhH5J9QBCKFlVvLa3ms3Du0hdGoCE176VMFOZJ7pVlDuNaOEnSpjpOmg6ZYg392xyJn/LVTCPZmkI7ZTtyhgh5mR3uJB2ys7n8sNXmeqR0VQakZuN1ybT6syg+hwoWkR8LWiJ10PSCHPVjyW2JbBT7YYOvd5TpsvnaY2faN/ft8ajE+Yq7kgDUrFxBr3Mo6HuGuYOgnARB2rkoH6r45hq562R/Q4Q+f2jQik9A42JMJed0msYYuzUVIrUWMMSlLwaLJJrE2Gnxpv/zHVIoX69AJFNQbCdmuo72giz1UAkZhZqp0YUW7XcXGXViU8j0E5HZhRbTedcU8av2okgO21ZSKx1uXMVZSGbuwA71YtXugjl2QuRUsOK/sdd3q0cdsJchWfIrO2dcte2YdQQZhttyOVEnp4jyyjjIMxWGFjNQPWzU1vleBchJHkuRqrJ+cQ1DettT8K4QhxykU2e2039Zeu+B2GuuqSqp99ppwtr730Ic1UhVz39DkOaWPvuR5hrEa52oTZt3AXoJgTGZUOkBrPqpi0noAdhpvWbOj7aLwJ2vIOehJmGG3USt6Xkcu9vLGEeR7h6ZZ8lYsRv840nzFM6UN2yG3/j2ok+kBCZ6eIvdcdn+LhuqRZOmGcZrnj6LYcygISNdob4sOrpZ4cyNvbtUixhluWNOttZP8AR5hhvFA+omuzO7wtHEeYI8yvuxdO0PLZ3UUjYaJ899KbmVez/6dv7FYwgzLApVtZlOzsNsdAYwsb83GOq4ukvV8jvc3vXQITnH3CUV9GxnUcRNuaYW119dXoVu2FvYDwh6r4DX+1fxfaIp1kkJGy0z7pprF7FwTzmAcYTlhZzTq//rBHLJyBsNPpxlZtj9BTNJyLEZWW7dO3uSiLC8ww5fhvdVITlcxSkTvtI9PwghOViCnNRr0nrvvu/PwNhOa5iyoBwLXy38bWCEJaz1TV6ubq5jprfdYEIS40gBdz2mkIe31Y4wlLjKaJaZPEatMN1CUpYavS4FtH1HnFPbyc0YanB1a/t0r16vf1eCdYuNiUgrNTuNMNiVsNmJwFdpUSEW806qw/3ELv5WHVMWZMopSTcaTbu304Xz8PhS2/99nN3d/fzsNn0esPlZHrb76Zk2+l/U1CMCr8X140AAAAASUVORK5CYII='></Avatar>
            
         </div>
         <HeaderOptions />
        </header>
    )
}

export default Header
