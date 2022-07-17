import PropTypes from 'prop-types';
import Button from '../Button/Button';

function TrainingItem(props) {
    const { training, removeTraining, editTraining } = props;
    // Конвертация формата времени из 2022-07-17 в 17.07.2022
    const convertDate = training.date.split('-').reverse().join('.');

    return (
        <div className='item' data-id={training.id}>
            <p className='item__date'>{convertDate}</p>
            <p className='item__distance'>{training.distance}</p>
            <div className='item__buttons'>
                <Button
                    status={'primary'}
                    onClick={() => editTraining(training)}
                >
                    Edit
                </Button>
                <Button
                    status={'remove'}
                    onClick={() => removeTraining(training)}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
}

export default TrainingItem;

TrainingItem.propTypes = {
    training: PropTypes.object.isRequired,
    removeTraining: PropTypes.func.isRequired,
    editTraining: PropTypes.func.isRequired,
}