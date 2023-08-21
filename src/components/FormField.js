const FormField = ({ type = 'text', labelId, labelText, options = [], ...props }) => (
    <div>
        <label htmlFor={labelId}>{labelText}</label>
        {type === 'select' ?
            (<select id={labelId} {...props}>
                {options.map(option => <option>{option}</option>)}
            </select>) :
            <input type={type} id={labelId} {...props} />
        }

    </div>
);

export default FormField;