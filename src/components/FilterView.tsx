import './FilterView.css';

const FilterView: React.FC = () => {
    let display = 'none';
    function handleClick() {
        display = display = 'none'? 'block' : 'none';
    }
    
    // const getStyle = {
    //     display: {display},
    //     overflow: 'hidden',
    //     background-color: #'f1f1f1',
    // }
    return (
       <div className="filterContainer">
           <button className="collapsible" onClick={handleClick}>Gender</button>
           <p>Hello</p>
           <div className="content">
                {/* <select name="" id="">
                    <option value="">Woman</option>
                    <option value="">Men</option>
                    <option value="">Both</option>
                </select> */}
                {/* <label htmlFor="">
                    <input type="checkbox"/>    
                    Woman
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>    
                    Men
                </label>
                <label htmlFor="">
                    <input type="checkbox"/>    
                    Both
                </label> */}
           </div>
           
       </div>
    );
}

export default FilterView