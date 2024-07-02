import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="drawer relative">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <div className="p-5 flex gap-3 items-center">
                    <label htmlFor="my-drawer" className="drawer-button"><i className="fa-solid fa-lg fa-bars"></i></label>
                    <h1 className="font-semibold text-xl"><span className="text-green-500">Meal</span>Sheet</h1>
                </div>
                <div>
                    <Outlet>

                    </Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <div className=" text-right">
                        <label htmlFor="my-drawer" className="drawer-button"><i className="fa-solid fa-lg fa-xmark"></i></label>
                    </div>
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Root;