import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "@/redux/actions";
import { Filter } from "../constants/enum";
import { State } from "@/redux/reducers";

const FilterButton: React.FC = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state: State) => state.filter);
    
    const handleFilter = (filter: string) => {
        dispatch(filterTodos(filter));
    };

    return (
        <div className={"flex space-x-4 items-center p-8"}>
            <select
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
                className="inline-flex w-full justify-center py-2 bg-violet-300 rounded-lg"
            >
                <option value={Filter.ALL}>All</option>
                <option value={Filter.COMPLETE}>Completed</option>
                <option value={Filter.INCOMPLETE}>Incomplete</option>
            </select>
        </div>
    );
};

export default FilterButton;