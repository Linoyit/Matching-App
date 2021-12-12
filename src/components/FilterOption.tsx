
interface optionProps {
    type: string;
    option: string;
    checked: boolean;
    onToggleChange: (type: string, option: string) => void;
  }

const FilterOption: React.FC<optionProps> = ({
    type,
    option,
    checked,
    onToggleChange,
  }) => {
    function handleChange() {
      onToggleChange(type, option);
    }
  
    return (
      <div className="input">
        <input
          type="checkbox"
          id={option}
          name={option}
          onChange={handleChange}
          checked={checked}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    );
  };

  export default FilterOption;