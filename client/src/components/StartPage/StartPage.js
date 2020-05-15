import React, { Component } from 'react';

import clientsData from '../api/clients';
import Select, { createFilter } from 'react-select';
import MenuList from './SearchCompany';
import catImage from './../../assests/images/cat.png';
import styles from './StartPage.module.scss';

class StartPage extends Component {

    getCompanyName = clientsData => {
        return (
            clientsData.H + 
            ' ' + 
            clientsData.I + 
            ' (' + 
            clientsData.J + 
            ', ' +  
            clientsData.L +
            ' ' +
            clientsData.M + 
            ')'
        );
    }

    render() {

        const { start, selectValue } = this.props;
        
        return (
            <div className={styles.content}>
                <div className={styles.cat}>
                    <img src={catImage} alt="" />
                </div>
                <form onSubmit={start}>
                    <Select
                        filterOption={createFilter({ ignoreAccents: false })}
                        className={styles.select}
                        components={{ MenuList }}
                        options={clientsData}
                        onChange={selectValue}
                        placeholder="Nazwa firmy"
                        getOptionLabel ={this.getCompanyName}
                        getOptionValue ={(clientsData)=>clientsData.F}
                        noOptionsMessage ={() => "Brak wyników"}
                        required
                    />
                    
                    <button 
                        type="submit"
                        className={styles.btn}>
                        Rozpocznij Quiz &raquo;
                    </button>
                </form>
            </div>
        );
    }
}

export default StartPage;