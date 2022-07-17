import PropTypes from 'prop-types';
import TrainingListItems from '../TrainingListItems/TrainingListItems';

function TrainingList(props) {
    const { allTraining, removeTraining, editTraining } = props;
    return (
        <div className='training__list'>
            {allTraining.length === 0 ? (
                <h2 className='training__list-no-items'>Список пуст</h2>
            ) : (
                <TrainingListItems
                    allTraining={allTraining}
                    editTraining = {editTraining}
                    removeTraining={removeTraining}
                />
            )}
        </div>
    );
}

export default TrainingList;

TrainingList.propTypes = {
    allTraining: PropTypes.array.isRequired,
    removeTraining: PropTypes.func.isRequired,
    editTraining: PropTypes.func.isRequired,
}