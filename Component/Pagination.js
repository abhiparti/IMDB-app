import { useState,useEffect,useCallback } from 'react';


const Pagination = ({getpageno}) => {
    const totalPages = 15;
    const maxVisiblePages = 10;

    const [page, setPage] = useState([]);
    const [active, setActivePages] = useState(1);

    const getList = (totalPages,maxVisiblePages,active) =>{
        const requiredLength = totalPages > maxVisiblePages ? maxVisiblePages:totalPages;
        const startingPage = active+requiredLength > totalPages ? totalPages-maxVisiblePages+1: active;
        return [...Array(requiredLength)].map((_, idx) => {
            return startingPage+idx;
        })
    }

    useEffect(() =>{
      const list =  getList(totalPages,maxVisiblePages,active);
      setPage(list);
    },[active]);

    const Changepage = useCallback((e) =>{
        let selectedpage = 0;
        if(e.target.dataset.id ==="PREVIOUS"){
            selectedpage = active -1;
        }else if(e.target.dataset.id ==="NEXT"){
            selectedpage = active +1;
        }else{
            selectedpage = Number(e.target.dataset.id);
        }
        getpageno(selectedpage);
        setActivePages(selectedpage);
    },[active])
    return (
        <div className="page-style">
            <button  data-id ="PREVIOUS" className="page-no" disabled= {active === 1} onClick={Changepage}>Prev</button>
            {
                page.map((p) =>(
                    <button data-id ={p} className={`page-no ${ active == p ?'activeone' : ''}`} onClick={Changepage}>{p}</button>
                ))
            }
            <button  data-id ="NEXT" className="page-no" disabled= {active === totalPages} onClick={Changepage}>Next</button>
        </div>
    )
}
export default Pagination;