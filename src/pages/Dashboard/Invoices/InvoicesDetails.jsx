import { AiFillAmazonCircle, AiOutlineCloudDownload, AiOutlinePrinter } from "react-icons/ai";

const InvoicesDetails = () => {

    return (
        <div>
            <div className="p-6 dark:bg-gray-800 dark:text-gray-50">

                <div className="container flex flex-col mx-auto space-y-12">
                    {/* user profile Information  */}
                    <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-900">

                        {/* User Information  */}
                        <div className=" dark:bg-slate-800  shadow-xl p-6 rounded-md ">
                            <div className="flex  flex-col justify-between items-center">
                                <p className="text-7xl my-4 text-blue-500">
                                    <AiFillAmazonCircle></AiFillAmazonCircle>
                                </p>
                                <p className="text-3xl font-bold text-gray-600 dark:text-white">INVOICE #985466</p>

                            </div>
                            <div className=" lg:flex justify-between items-center">
                                <div className="w-96 text-start my-8">
                                    <h3 className="text-xl my-2 font-semibold text-gray-500 dark:text-white">Order Recieved</h3>
                                    <p className="text-lg my-2 font-semibold text-gray-500 dark:text-white">
                                        Office 25/B, Road 30, West jalkuri, Fatullah, Narayanganj 1265.
                                    </p>
                                    <p className="text-lg my-2 font-semibold text-gray-500 dark:text-white">
                                        (+880) 1982-1212-222
                                    </p>
                                    <p className="text-lg my-2 font-semibold text-gray-500 dark:text-white">
                                        support@gmail.com
                                    </p>
                                </div>
                                <div className="w-96 text-start lg:text-end my-8">
                                    <h3 className="text-xl my-2 font-semibold text-gray-500 dark:text-white">Shipment Details</h3>
                                    <p className="text-lg my-2 font-semibold text-gray-500 dark:text-white">
                                        Office 25/B, Road 30, West jalkuri, Fatullah, Narayanganj 1265.
                                    </p>
                                    <p className="text-lg my-2 font-semibold text-gray-500 dark:text-white">
                                        (+880) 1982-1212-222
                                    </p>
                                    <p className="text-lg my-2 font-semibold text-gray-500 dark:text-white">
                                        support@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table table-compact w-full">
                                    <thead>
                                        <tr>
                                            <th>UID</th>
                                            <th>PRODUCT</th>
                                            <th>PRICE</th>
                                            <th>DISCOUNT</th>
                                            <th>QUANTITY</th>
                                            <th>AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>#5768</td>
                                            <td>modern summer short</td>
                                            <td>$20</td>
                                            <td>20%</td>
                                            <td>03</td>
                                            <td>$15</td>


                                        </tr>
                                        <tr >
                                            <td>#5768</td>
                                            <td>modern summer short</td>
                                            <td>$20</td>
                                            <td>20%</td>
                                            <td>03</td>
                                            <td>$15</td>


                                        </tr>
                                        <tr >
                                            <td>#5768</td>
                                            <td>modern summer short</td>
                                            <td>$20</td>
                                            <td>20%</td>
                                            <td>03</td>
                                            <td>$15</td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className=" lg:flex justify-between items-center">
                                <div className="w-96 text-start my-8">

                                </div>
                                <div className="w-72  lg:text-end my-8">
                                    <div className="text-md my-2 grid grid-cols-3 gap-3  items-center font-semibold text-gray-500 dark:text-white">
                                        <p className="col-span-1 justify-start">Subtotal</p> <p className="col-span-1 justify-start">:</p> <p className="col-span-1 justify-start">$202,200</p>
                                    </div>
                                    <div className="text-md my-2 grid grid-cols-3 gap-3  items-center font-semibold text-gray-500 dark:text-white">
                                        <p className="col-span-1 justify-start">Discount</p> <p className="col-span-1 justify-start">:</p> <p className="col-span-1 justify-start">$150</p>
                                    </div>
                                    <div className="text-md my-2 grid grid-cols-3 gap-3  items-center font-semibold text-gray-500 dark:text-white">
                                        <p className="col-span-1 justify-start">Shipping</p> <p className="col-span-1 justify-start">:</p> <p className="col-span-1 justify-start">$50</p>
                                    </div>
                                    <div className="text-md my-2 grid grid-cols-3 gap-3  items-center font-semibold text-gray-500 dark:text-white">
                                        <p className="col-span-1 justify-start">Total</p> <p className="col-span-1 justify-start">:</p> <p className="col-span-1 justify-start">$25,550</p>
                                    </div>
                                    <hr className="my-5" />
                                    <div className="text-md my-2 grid grid-cols-3 gap-3  items-center font-semibold text-gray-500 dark:text-white">
                                        <p className="col-span-1 justify-start">Status</p> <p className="col-span-1 justify-start">:</p> <p className="col-span-1 justify-start text-purple-600">COD</p>
                                    </div>
                                </div>
                            </div>


                            <hr className="my-6" />
                            <p className="p-3 text-start font-medium">Thank you for ordering greeny. We offer a 7-day return policy on all products. If you have any complain about this order, please call or email us. (VAT has been calculated as per GO 02/Mushak/2019). This is a sytem generated invoice and no signature or seal is required.</p>

                            <div className="lg:flex items-center justify-center my-8 gap-4">
                                <p className="flex items-center gap-x-2 text-white btn border-0 hover:bg-green-500 bg-green-600">
                                    <AiOutlinePrinter className="text-2xl"></AiOutlinePrinter> <span className="tracking-wider">Print This Receipt</span>
                                </p>

                                <p className="flex mt-6 lg:mt-0 items-center gap-x-2 btn text-white border-0 hover:bg-blue-600 bg-blue-700">
                                    <AiOutlineCloudDownload className="text-2xl"></AiOutlineCloudDownload> <span className="tracking-wider">Download</span>
                                </p>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>

        </div>
    );
};

export default InvoicesDetails;