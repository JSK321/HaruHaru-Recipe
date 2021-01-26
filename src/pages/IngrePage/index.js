import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../utils/API'
import IngreForm from '../../components/IngreForm'

export default function IngrePage() {
    return (
        <div>
            <IngreForm/>
        </div>
    )
}
