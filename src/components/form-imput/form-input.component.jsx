import './form-input.styles.scss';

const FormInput = ({ label, ...Props }) => {
  return (
    <div className='group'>
      <input className='form-input' {...Props} />
      {label && (
        <label
          className={`${Props.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
