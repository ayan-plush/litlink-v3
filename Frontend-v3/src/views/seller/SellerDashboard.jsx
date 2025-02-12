import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { FaBookOpen,FaBookReader,FaCreativeCommonsShare } from "react-icons/fa";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';



const SellerDashboard = () => {
  

  const state = {
    series : [
      {
        name : "Orders",
        data : [23,34,45,56,76,34,23,56,87,78]
      },
      {
        name : "Revenue",
        data : [53,64,25,36,76,34,23,56,87,78]
      },
      {
        name : "Sales",
        data : [23,34,45,56,76,34,23,56,87,78]
      },

    ],
    options : {
      color : ['#daa28e','#DFC39B','#546845'],
      plotOptions: {
        radius : 30
      },
      chart : {
        background : 'transparent',
        foreColor : '#fdebd0'
      },
      dataLabels : {
        enabled : false
      },
      stroke : {
        show:true,
        curve : ['smooth','straight','stepline'],
        lineCap: 'butt',
        colors : '#fdebd0',
        width : .5,
        dashArray : 0
      },
      xaxis : {
        categories :['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
      },
      legend : {
        position : 'top'
      },
      responsive : [
        {
          breakpoint : 565,
          yaxis : {
            categories :['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
          },
          options :{
            plotOptions: {
            bar : {
              horizontal : true
            }
          }
          },
          chart : {
            height: "550px"
          },

        },
      ]
    }
  }




  return (
    <div className='px-2 md:px-7 py-5'>
      <div className="w-full grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
        <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start'>
            <h2 className='text-3xl font-semibold'>$2000</h2>
            <span className='text-md font-[impacted]'>Total Sales</span>

          </div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
          <MdCurrencyExchange />


          </div>
        </div>
        {/* 2nd */}
        <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start'>
            <h2 className='text-3xl font-semibold'>100</h2>
            <span className='text-md font-[impacted]'>Books</span>

          </div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
          <FaBookOpen />


          </div>
        </div>
        {/* 3rd */}
        <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start'>
            <h2 className='text-3xl font-semibold'>20</h2>
            <span className='text-md font-[impacted]'>Orders</span>

          </div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
          <FaBookReader />


          </div>
        </div>
        {/*4th*/}
        <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start'>
            <h2 className='text-3xl font-semibold'>5</h2>
            <span className='text-md font-[impacted]'>Pending Orders</span>

          </div>
          <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
          <FaCartShopping />


          </div>
        </div>
      </div>


      <div className='w-full flex flex-wrap mt-7 '>
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#312C23] p-4 rounded-md">
            <Chart options={state.options} series={state.series} type='bar' height={350}/>
          </div>
        </div>
        {/* seller message */}
        <div className="w-full lg:w-5/12 lg:4l-4 mt-6 lg:mt-0">
        <div className="w-full bg-[#312C23] p-4 rounded-md text-[#fdebd0] ">
            <div className="flex justify-between items-center">
              <h2 className='font-semibold text-lg'> Recent User Message</h2>
              <Link className='font-semibold text-sm'>View All</Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 ">
              <ol className='relative border-1 border-slate-600 ml-4'>
                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] rounded-full z-10'>
                    <img className=' w-full founded-full h-full rounded-full shadow-lg' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />
                  </div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm '>
                    <div className="flex justify-between text-white items-center mb-2">
                      <Link className='text-md font-normal'>Customer</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                    </div>
                    <div className='p-2 text-white text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                      how are you
                    </div>
                  </div>
                  
                </li>
                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] rounded-full z-10'>
                    <img className=' w-full founded-full h-full rounded-full shadow-lg' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />
                  </div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm '>
                    <div className="flex justify-between text-white items-center mb-2">
                      <Link className='text-md font-normal'>Admin</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                    </div>
                    <div className='p-2 text-white text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                      how are you
                    </div>
                  </div>
                  
                </li>
                <li className='mb-3 ml-6'>
                  <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] rounded-full z-10'>
                    <img className=' w-full founded-full h-full rounded-full shadow-lg' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />
                  </div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm '>
                    <div className="flex justify-between text-white items-center mb-2">
                      <Link className='text-md font-normal'>Seller</Link>
                      <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                    </div>
                    <div className='p-2 text-white text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                      how are you
                    </div>
                  </div>
                  
                </li>

              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 text-[#fff2df]  rounded-md mt-6 bg-[#312C23] ">
        <div className="flex justify-between items-center">
          <h2 className='font-semibold text-lg'>Recent Orders</h2>
          <Link className='font-semibold text-sm'>View All</Link>
        </div>
        <div className="relative overflow-x-auto ">
          <table className='w-full text-sm  text-left'>
            <thead className='uppercase border-b border-slate-700'>
            <tr>
              <th scope='col' className='py-3 px-4'>Order Id</th>
              <th scope='col' className='py-3 px-4'>price</th>
              <th scope='col' className='py-3 px-4'>payment status</th>
              <th scope='col' className='py-3 px-4'>Order status</th>
              <th scope='col' className='py-3 px-4'>active</th>
            </tr>
            </thead>
            <tbody>
              {
                [1,2,3,4,5].map((d,i)=><tr key={i}>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#3444</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>$454</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>View</td>
              </tr>)
              }
            </tbody>

          </table>

        </div>
      </div>
      
    </div>
  )
}

export default SellerDashboard

