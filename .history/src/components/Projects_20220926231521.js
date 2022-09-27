import React from 'react';
import chatApp from '../images/mobile.gif'

const Projects = () => {
     return (
          <div className="">
               <div className="grid h-screen place-items-center">
                    <div class="flex justify-center ">
                         <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                              <div class="h-[10rem] shadow-lg bg-white max-w-sm shadow-4-strong bg-[url({chatApp})] rounded-lg  m-1">
                                   <img src={chatApp}
                                        alt=""/>
                              </div>
                              <div class="p-6">
                                   <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
                                   <p class="text-gray-700 text-base mb-4">
                                        With supporting text below as a natural lead-in to additional content.
                                   </p>
                                   <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                              </div>
                              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                                   2 days ago
                              </div>
                         </div>
                    </div>

               </div>


               <section class="vh-100">
                    <div class="container py-5">

                         <div class="row d-flex justify-content-center align-items-center h-100">
                              <div class="col-md-9 col-lg-7 col-xl-5">

                                   <div id="wrapper-bg" className="text-white card bg-image shadow-4-strong bg-[url('https://camo.githubusercontent.com/dab1adb572df299cb1d00d6590605b2a558e50dd35d36d9a652758874f5ed8fd/68747470733a2f2f692e696d6775722e636f6d2f53774d46354f612e676966?fbclid=IwAR39Su6fIdSZC3-waaL2eXb46lyOd-UqFBNapCvPQrLg53UlsdHXJsZETaI')]">

                                        <div class="card-header p-4 border-0">
                                             <div class="text-center mb-3">
                                                  <p class="h2 mb-1" id="wrapper-name"></p>
                                                  <p class="mb-1" id="wrapper-description"></p>
                                                  <p class="display-1 mb-1" id="wrapper-temp"></p>
                                                  <span class="">Pressure:
                                                       <span id="wrapper-pressure"></span>
                                                  </span>
                                                  <span class="mx-2">|</span>
                                                  <span class="">Humidity:
                                                       <span id="wrapper-humidity"></span>
                                                  </span>
                                             </div>
                                        </div>

                                        <div class="card-body p-4 border-top border-bottom mb-2">
                                             <div class="row text-center">
                                                  <div class="col-2">
                                                       <strong class="d-block mb-2">Now</strong>
                                                       <img id="wrapper-icon-hour-now" src="" class="" alt=""/>
                                                       <strong class="d-block" id="wrapper-hour-now"></strong>
                                                  </div>

                                                  <div class="col-2">
                                                       <strong class="d-block mb-2" id="wrapper-time1"></strong>
                                                       <img id="wrapper-icon-hour1" src="" class="" alt=""/>
                                                       <strong class="d-block" id="wrapper-hour1"></strong>
                                                  </div>

                                                  <div class="col-2">
                                                       <strong class="d-block mb-2" id="wrapper-time2"></strong>
                                                       <img id="wrapper-icon-hour2" src="" class="" alt=""/>
                                                       <strong class="d-block" id="wrapper-hour2"></strong>
                                                  </div>

                                                  <div class="col-2">
                                                       <strong class="d-block mb-2" id="wrapper-time3"></strong>
                                                       <img id="wrapper-icon-hour3" src="" class="" alt=""/>
                                                       <strong class="d-block" id="wrapper-hour3"></strong>
                                                  </div>

                                                  <div class="col-2">
                                                       <strong class="d-block mb-2" id="wrapper-time4"></strong>
                                                       <img id="wrapper-icon-hour4" src="" class="" alt=""/>
                                                       <strong class="d-block" id="wrapper-hour4"></strong>
                                                  </div>

                                                  <div class="col-2">
                                                       <strong class="d-block mb-2" id="wrapper-time5"></strong>
                                                       <img id="wrapper-icon-hour5" src="" class="" alt=""/>
                                                       <strong class="d-block" id="wrapper-hour5"></strong>
                                                  </div>
                                             </div>
                                        </div>

                                        <div class="card-body px-5">
                                             <div class="row align-items-center">
                                                  <div class="col-lg-6">
                                                       <strong>Today</strong>
                                                  </div>

                                                  <div class="col-lg-2 text-center">
                                                       <img id="wrapper-icon-today" src="" class="w-100" alt=""/>
                                                  </div>

                                                  <div class="col-lg-4 text-end">
                                                       <span id="wrapper-forecast-temp-today"></span>
                                                  </div>
                                             </div>

                                             <div class="row align-items-center">
                                                  <div class="col-lg-6">
                                                       <strong>Tomorrow</strong>
                                                  </div>

                                                  <div class="col-lg-2 text-center">
                                                       <img id="wrapper-icon-tomorrow" src="" class="w-100" alt=""/>
                                                  </div>

                                                  <div class="col-lg-4 text-end">
                                                       <span id="wrapper-forecast-temp-tomorrow">28</span>
                                                  </div>
                                             </div>

                                             <div class="row align-items-center">
                                                  <div class="col-lg-6">
                                                       <strong>Day after tomorrow</strong>
                                                  </div>

                                                  <div class="col-lg-2 text-center">
                                                       <img id="wrapper-icon-dAT" src="" class="w-100" alt=""/>
                                                  </div>

                                                  <div class="col-lg-4 text-end">
                                                       <span id="wrapper-forecast-temp-dAT">28</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default Projects;
