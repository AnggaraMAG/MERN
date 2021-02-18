import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import { BLUE } from '../../utils/colors/constansColor'
import Tooltip from "@material-ui/core/Tooltip";
import { Button, Input, Gap, Links } from '../../components'
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  styleButton: {
    marginTop: theme.spacing(2),
  },
  root: {
    marginTop: theme.spacing(3)
  }
}));



const ArrayValidation = () => {
  const classes = useStyles();
  const [array, setArray] = useState([{
    name: ""
  }])

  const { handleSubmit, errors: fieldsErrors, register } = useForm();
  console.log(`fieldsErrors`, fieldsErrors)

  const handleAddClick = () => {
    setArray(array => [...array, { name: "" }])
  }

  const handleRemoveClick = (key) => {
    const list = [...array];
    list.splice(key, 1);
    setArray(list);
  }

  const handleInputChange = (e, key) => {
    const { name, value } = e.target
    // console.log(`namee`, name)
    // console.log(`valuee`, value)
    // console.log(`keyy`, key)
    let list = [...array]
    list[key][name] = value
    setArray(list)
  }

  const _submit = () => {
    console.log(`submit item:`, array)
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {array.map((item, key) => {
            // console.log(`array.map:`, item)
            return (
              <Grid container>
                <Grid item xs={9} >
                  <Input
                    key={key}
                    label="Name"
                    name={"name"}
                    value={item.name}
                    onChange={(e) => handleInputChange(e, key)}
                    inputRef={register({
                      required: 'Name cannot be empty!'
                    })}
                    helperText={fieldsErrors.name ? fieldsErrors.name.message : null}
                    error={!!fieldsErrors.name}
                  />
                </Grid>
                <Grid item className={classes.styleButton}>
                  {array.length !== 1 && (
                    <Tooltip title="Delete" placement="top">
                      <IconButton
                        onClick={() => handleRemoveClick(key)}
                        style={{ color: "red" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Tooltip title="Add" placement="top">
                    <IconButton
                      color="primary"
                      onClick={() => handleAddClick()}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" label="Save" width="60%" background={BLUE} height={30}
            onClick={handleSubmit(_submit)}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ArrayValidation
