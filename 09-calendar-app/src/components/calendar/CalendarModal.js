import moment from 'moment';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

  const now = moment().minutes(0).seconds(0).add(1, 'hours');
  const nowPlu1Hour = now.clone().add(1, 'hours');

  
  


  export const CalendarModal = () => {
    
    const [startDate, setStartDate] = useState(now.toDate());
    const [endDate, setEndDate] = useState(nowPlu1Hour.toDate());

  const [formValues, setFormValues] = useState({
      title: 'Evento',
      notes: '',
      start: now.toDate(),
      end: nowPlu1Hour.toDate()
  });

  const {title, notes } = formValues;

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }
    
  
  
  
  const closeModal = () => {
  
    }
    
    const handleStarDateChange = (e) => {
        setStartDate(e);
        console.log(e);
        setFormValues({
            ...formValues, 
            start: e
        })
    }

    const handleEndDateChange = (e) => {
        setEndDate(e);
        console.log(e);
        setFormValues({
            ...formValues, 
            end: e
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }
    
    return (
        <Modal
            isOpen={true}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal} 
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form 
                className="container"
                onSubmit={handleSubmit}    
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStarDateChange}
                        value={startDate}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={endDate}
                        className="form-control"
                        minDate={ startDate }
                        />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={ handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted mb-2">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={ handleInputChange}

                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted mb-2">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block w-100 mt-2"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
