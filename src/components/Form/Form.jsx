import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Button from '../Button/Button';
import Input from '../Input/Input';

function Form(props) {
    const {form, changeForm} = props;


    const handleSubmit = (event) => {
        event.preventDefault();
        const newTraining = { ...form, id: v4() };
        props.addTraining(newTraining);
    };

    const handleChange = (event) => {
        let {name, value} = event.target;
        if (name === 'distance' && Number.parseFloat(value)) {
            value = Number.parseFloat(value);
        }
        changeForm({name, value});
    }

    return (
        <form className='training__form' onSubmit={handleSubmit}>
            <Input
                type='date'
                name='date'
                id='date'
                value={form.date}
                onChange={handleChange}
            />
            <Input
                value={form.distance}
                type='number'
                name='distance'
                id='distance'
                placeholder='Дистанция'
                step='any'
                min='0'
                max='100'
                onChange={handleChange}
            />
            <Button status={'primary'} type='submit'>
                Добавить
            </Button>
        </form>
    );
}

export default Form;

Form.propTypes = {
    form: PropTypes.object.isRequired,
}