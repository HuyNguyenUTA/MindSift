import styles from '../../styles/Home.module.scss'
import { useState } from 'react'

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputField({label, value, onChange}: InputFieldProps){
    const [paragraph, setParagraph] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({paragraph}),
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSetParagraph = (e: any) => {
        setParagraph(e.target.value)
    }
    return(
        <form className={styles.form}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type="text" value={paragraph} onChange={handleSetParagraph} placeholder='Typing ...'/>
            <button className={styles.submitButton} type='submit' onSubmit={handleSubmit} >Sift</button>
        </form>
    )
}