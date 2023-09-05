import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { MdDeleteForever, MdDrafts } from "react-icons/md";
import { FcDownload } from "react-icons/fc";
import { AiFillBank, AiFillEye } from "react-icons/ai";
import { useContext } from "react";
import { LicenseTypeContext } from "../../../ThemeContext/LicenseTypeContext";
const InvoicesList = () => {
    const { inputClass, selectClass } = useContext(LicenseTypeContext);

    const data = [
        {
            id: 1,
            clientName: 'Client 1',
            email: 'client1@example.com',
            amount: '$100',
            status: 'Paid',
            issuesDate: '2023-09-03',
        },
        {
            id: 2,
            clientName: 'Client 2',
            email: 'client1@example.com',
            amount: '$100',
            status: 'Paid',
            issuesDate: '2023-09-03',
        },
        {
            id: 3,
            clientName: 'Client 3',
            email: 'client1@example.com',
            amount: '$100',
            status: 'Paid',
            issuesDate: '2023-09-03',
        },
        {
            id: 4,
            clientName: 'Client 4',
            email: 'client1@example.com',
            amount: '$100',
            status: 'Paid',
            issuesDate: '2023-09-03',
        },
        // Add more data rows here
    ];

    return (
        <div>
            <div className="p-6 dark:bg-gray-800 dark:text-gray-50">

                <div action="" className="container flex flex-col mx-auto space-y-12">
                    {/* user profile Information  */}
                    <fieldset className="grid grid-cols-5  items-start gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        {/* User Activities */}

                        <div className="col-span-full">
                            <div className="grid grid-cols-6 gap-4">
                                <div className="col-span-full lg:col-span-2 my-6 lg:my-0">
                                    <div className="relative   h-36 rounded-lg bg-gradient-to-t from-purple-600 to-purple-400 flex items-center justify-start">
                                        <p className="absolute -top-8 right-0 text-7xl text-purple-500">
                                            <AiFillBank></AiFillBank>
                                        </p>
                                        <div className="text-start p-4 text-white">
                                            <h2 className="text-3xl font-bold">$78,593.00</h2>
                                            <p className="">Recieved Amount</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full lg:col-span-2 my-6 lg:my-0">
                                    <div className="relative   h-36 rounded-lg bg-gradient-to-t from-yellow-500 to-yellow-300 flex items-center justify-start">
                                        <p className="absolute -top-8 right-0 text-7xl text-yellow-200">
                                            <MdDrafts></MdDrafts>
                                        </p>
                                        <div className="text-start p-4 text-white">
                                            <h2 className="text-3xl font-bold">$24,950.00</h2>
                                            <p className="">Drafts Amount</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full lg:col-span-2 my-6 lg:my-0">
                                    <div className="relative   h-36 rounded-lg bg-gradient-to-t from-green-500 to-green-400 flex items-center justify-start">
                                        <p className="absolute -top-8  right-0 text-7xl text-green-300">
                                            <HiDotsCircleHorizontal></HiDotsCircleHorizontal>
                                        </p>
                                        <div className="text-start p-4 text-white">
                                            <h2 className="text-3xl font-bold">$53,617.00</h2>
                                            <p className="">Pending Amount</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </fieldset>
                    <fieldset className="grid grid-cols-5  items-start gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="col-span-full">
                            <div className="grid grid-cols-6 mt-4 items-center mx-auto gap-4 dark:bg-slate-800  shadow-xl p-6 rounded-md">
                                <div className="space-y-2 -my-10 col-span-full flex items-center justify-between">
                                    <h2 className="text-xl font-semibold">Shopping Invoices</h2>

                                    <p className="text-2xl font-medium">
                                        <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
                                    </p>

                                </div>
                                <div className="space-y-2 form-control  col-span-full text-start">
                                    <div className="container mx-auto mb-6">
                                        <div className="grid grid-cols-4 gap-4 mx-4 ">
                                            <div className="space-y-2 form-control font-semibold  col-span-full  lg:col-span-1">
                                                <label htmlFor="show_by" className="label">
                                                    {" "}
                                                    <span>SHOW BY</span>
                                                </label>
                                                <select
                                                    id="show_by"

                                                    className={selectClass}
                                                >
                                                    <option className={inputClass}>12 Row</option>
                                                    <option className={inputClass}>24 Row</option>
                                                    <option className={inputClass}>34 Row</option>

                                                </select>
                                            </div>
                                            <div className="space-y-2 form-control font-semibold  col-span-full  lg:col-span-1">
                                                <label htmlFor="status_by" className="label">
                                                    {" "}
                                                    <span>STATUS BY</span>
                                                </label>
                                                <select
                                                    id="status_by"

                                                    className={selectClass}
                                                >
                                                    <option className={inputClass}>Received</option>
                                                    <option className={inputClass}>Draft</option>
                                                    <option className={inputClass}>pending</option>

                                                </select>
                                            </div>
                                            <div className="space-y-2 form-control font-semibold  col-span-full  lg:col-span-1">
                                                <label htmlFor="date" className="label">
                                                    {" "}
                                                    <span>ISSUED BY</span>
                                                </label>
                                                <input
                                                    id="date"
                                                    type="date"
                                                    className={inputClass}
                                                >

                                                </input>
                                            </div>
                                            <div className="space-y-2 form-control font-semibold  col-span-full  lg:col-span-1">
                                                <label htmlFor="search_by" className="label">
                                                    {" "}
                                                    <span>SEARCH BY</span>
                                                </label>
                                                <input
                                                    id="search_by"

                                                    className={inputClass}
                                                    placeholder="id / name / email"

                                                >
                                                </input>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="container   mx-auto ">
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full text-xs">
                                                <colgroup>
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                    <col />
                                                </colgroup>
                                                <thead className="dark:bg-gray-700 ">
                                                    <tr className="bg-blue-600 text-white ">
                                                        <th className="p-3 text-lg uppercase text-start font-semibold flex items-center"><input type="checkbox" className=" checkbox-md me-2" name="" id="" /> UID </th>
                                                        <th className="p-3 text-base  text-start uppercase font-semibold">Client</th>
                                                        <th className="p-3 text-base  text-start uppercase font-semibold">Email</th>
                                                        <th className="p-3 text-base  text-start uppercase font-semibold">AMOUNT</th>
                                                        <th className="p-3 text-base  text-start uppercase font-semibold">STATUS</th>
                                                        <th className="p-3 text-base  text-start uppercase font-semibold">ISSUE DATE</th>
                                                        <th className="p-3 text-base  text-start uppercase font-semibold">ACTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((item) => (
                                                        <tr key={item.id} className="border-b text-start border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                            <td className="p-4 text-base font-bold">
                                                                <input type="checkbox" className=" checkbox-xs me-2" name="" id="" />#3467
                                                            </td>
                                                            <td className="p-4 text-base font-semibold text-gray-700 dark:text-gray-300">{item.clientName}</td>
                                                            <td className="p-4 text-base font-semibold text-gray-700 dark:text-gray-300">{item.email}</td>
                                                            <td className="p-4 text-base font-semibold text-gray-700 dark:text-gray-300">{item.amount}</td>
                                                            <td className="p-4 text-base font-semibold text-gray-700 dark:text-gray-300">{item.status}</td>
                                                            <td className="p-4 text-base font-semibold text-gray-700 dark:text-gray-300">{item.issuesDate}</td>
                                                            <td className="p-4 text-base font-semibold text-gray-700 dark:text-gray-300">
                                                                <button className="text-blue-500 text-2xl mx-2 hover:text-blue-700">
                                                                    <AiFillEye />
                                                                </button>
                                                                <button className="text-green-500 text-2xl  hover:text-green-700">
                                                                    <FcDownload />
                                                                </button>
                                                                <button className="text-red-500 text-2xl mx-2 hover:text-red-700">
                                                                    <MdDeleteForever />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div className="lg:flex items-center justify-between pt-6">
                                        <p className="text-lg mb-4 lg:mb-0 font-semibold text-gray-600 dark:text-gray-300">
                                            Showing <span className="font-bold">12</span> of  <span className="font-bold">70</span> Results
                                        </p>

                                        <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100">
                                            <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700">
                                                <span className="sr-only">Previous</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700">1</button>
                                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">2</button>
                                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">3</button>
                                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">...</button>
                                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">7</button>
                                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">8</button>
                                            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-700">9</button>
                                            <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700">
                                                <span className="sr-only">Next</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </nav>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </fieldset>
                </div>
            </div>

        </div>
    );
};

export default InvoicesList;