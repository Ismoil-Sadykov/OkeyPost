import { InputLabel, NativeSelect } from "@mui/material";

export default function Selects({ label, value, value2, value3 }) {
    return (
        <div>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                {label}
            </InputLabel>
            <NativeSelect
                defaultValue={1}
                sx={{width:"200px"}}
            >
                <option value={1}>{value}</option>
            </NativeSelect>
        </div>
    )
}
