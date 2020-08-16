import React from 'react';
import { Component } from 'react';

import { TableStyle } from './styles'

import { data } from './data'


const Table = () => {
    const titles = ["comando", "descrição"]
    return (
        <TableStyle>
            <thead>
                <tr>
                    {titles.map((title, index) => (
                        <th key={index}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr>
                        <td>{item.command}</td>
                        <td>{item.description}</td>
                        <hr />
                    </tr>
                ))}
                    
                
                {/* {data.map((item, index) => (
                    <tr key={index}>
                        {titles.map((title, index) => (
                            <td key={index}>{item}</td>
                        ))}
                    </tr>
                ))} */}
            </tbody>
        </TableStyle>
    )

};
export default Table