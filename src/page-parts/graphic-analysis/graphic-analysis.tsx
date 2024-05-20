import React from 'react'
import './graphic-analysis.css'
import { Col, Row } from 'antd'
import FaiGraphic from '../../components/atomics/fai-graphic/fai-graphic'
import { ExpenseListModel } from '../../api/models/expense-list-model'
import TitleWithSubtitle from '../../components/atomics/title-with-subtitle/title-with-subtitle';

export interface GraphicAnalysisProps {
    expenses: ExpenseListModel[];
}

const GraphicAnalysis = (props: GraphicAnalysisProps) => {
    return (
        <div className='graphic-analysis-container'>
            <TitleWithSubtitle title='Harcama Analizi' subtitle='Yaptığın harcamaları grafiksel analiz et'/>
            <Row>
                <Col span={14}>
                    <FaiGraphic expenses={props.expenses} />
                </Col>
                <Col span={10}>
                    <p>asd</p>
                </Col>
            </Row>
        </div>
    )
}

export default GraphicAnalysis