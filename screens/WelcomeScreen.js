import React, {Component} from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert,ScrollView, Modal, KeyboardAvoidingViewComponent} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
constructor(){
    super();
    this.setState = {
        emailId: '',
        password: '',
        firstName: '',
        lastName: '',
        address :'',
        contact :'',
        confirmPassword : '',
        isModalVisible: 'false'
    }
}

userSignUp = (emailId,password,confirmPassword) =>{
    if(password !== confirmPassword){
        return Alert.alert("password dosen't match /nCheck your password.")
    }
    else{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then (()=>{
            db.collection('users').add({
                first_naime:this.state.firstName,
                last_name: this.lastName,
                contact:history.state.contact,
                email_id: this.state.emailId,
                address:this.state.address
            })
            return Alert.alert(
                'user Added Successfully',
                '',
                [
                    {text:'OK',onPress: ()=> this.setState({"isModalVisible": flase})},

                ]

            );
        })
        .catch((errir)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        });
    }
}


userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(()=>{ 
    return Alert.alert("Sucessfully Login")
     })
.catch((error)=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    return Alert.alert(errorMessage)
})

}

showModal = ()=>{
    return(
        <Modal
        animationType = "fade"
        transparent = {true}
        visible = {this,state.isModalVisible}
        >
            <View style = {styles.modalContainer}>
                <ScrollView style = {{width:'100%'}}>
                    <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
                        <Text
                        style = {styles,modalTitle}
                        >Registration</Text>

                            <TextInput
                            style = {styles.formTextInput}
                            placeholder = {"First Name"}
                            maxLegth = {8}
                            onChangeText = {(text)=>{
                                this.setState({
                                    firstName: text
                                })
                            }}

                            />
                            <TextInput
                            style = {styles.formTextInput}
                            placeholder = {"Last Name"}
                            maxLegth = {8}
                            onChangeText = {(text)=>{
                                this.setState({
                                    lastName: text
                                })
                            }}

                            />


                        <TextInput
                            style = {styles.formTextInput}
                            placeholder = {"Contact"}
                            maxLegth = {10}
                            keyboardType = {'numeric'}
                            onChangeText = {(text)=>{
                                this.setState({
                                    contact: text
                                })
                            }}

                            />      

                        <TextInput
                            style = {styles.formTextInput}
                            placeholder = {"Address"}
                            multiline = {true}
                            onChangeText = {(text)=>{
                                this.setState({
                                    address: text
                                })
                            }}

                            />

                        <TextInput
                            style = {styles.formTextInput}
                            placeholder = {"Email"}
                           KeyBoardType = {'email-adress'}
                            onChangeText = {(text)=>{
                                this.setState({
                                    emailId: text
                                })
                            }}

                            />

<TextInput
                            style = {styles.formTextInput}
                            placeholder = {"Password"}
                            secureTextEntry = {true}
                            onChangeText = {(text)=>{
                                this.setState({
                                    password: text
                                })
                            }}

                            />

<TextInput
                            style = {styles.formTextInput}
                            placeholder = {"Confirm Password"}
                            secureTextEntry = {true}
                            onChangeText = {(text)=>{
                                this.setState({
                                    confirmPassword: text
                                })
                            }}

                            />

                            <View style = {styles.modalBackButton}>
                                <TouchableOpacity
                                style = {styles.registerButton}
                                onPress={()=>
                                this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)

                                }
                                >
                                    <Text style = {styles = {styles.registerButtonText}}>Register</Text>

                                </TouchableOpacity>
                            </View>

                                    <View style = {styles.modalBackButton}>
                                        <TouchableOpacity 
                                        style = {styles.cancelButton}
                                        onPress = {()=>this,setState({"isModalVisible":false})}
                                        >
                                            <Text style = {{color: '#ff5722'}}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>

                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
            </Modal>
    )
                            }

render(){
    return(
        <View style = {StyleSheet.container}>
            <View style = {{justifyContent: 'center',alignItems 'center'}}>
                
            </View>
            <View style = {StyleSheet.profileContainer}>
                <SantaAnimation/>
                <Text style = {styles.title}>Book Santa</Text>
            </View>
            <View style = {styles.buttonContainer}>


                <TextInput
                style ={styles.loginBox}
                placeHolder = "emaple@booksanta.com"
                placeholderTextColor = "#ffff"
                keyBoardType = 'email-address'
                onChangeText = {(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}
                />

                <TextInput
                style = {styles.loginBox}
                secureTextEntry = {true}
                placeholder = "password"
                placeholderTextColor = '#ffff'
                onChangeText = {(text)=>{
                    this.setState({
                        password: text
                    })
                }}
                />
                <TouchableOpacity
                style = {[styles.button,{marginBottom:20, marginTop:20}]}
                onPress = {()=>{this.userLogin(this.state.emaiId, this.state.password)}}
                >
                    <Text style = {styles.buttonText}>Login</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                     style = {styles.button}
                     onPress = {()=>{this,userSignUp(this.state.emailId, this .state.password)}}
                     >
                         <Text style = {styles.buttonText}>userSignUp</Text>
                     </TouchableOpacity>
            </View>
        </View>
    )
}
}

const Styles = StyleSheet.crenate({
    container:{
        flex:1,
        backgroundColor:'#F8BE85'
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize: 65,
        fontWeight:'300',
        paddingBottom: 30,
        color: '#ff3d00'
    },

    loginBox:{
        width: 300,
        height:40,
        BordeRBottomWidth: 1.5,
        borderColoe: '#ff8a65',
        fontSize: 20,
        margin: 10,
        paddingLeft : 10
    },
    button:{
        width:300,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:25,
        backgroundColor: '#ff9800',
        shadowColor: "#000",
        shadowOffset :{
            width:0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius:10.32,
        elevation:16,
    },
    buttonText:{
        color: '#ffff',
        fontWeight:'200',
        fontSize: 20
    },
    buttonContainer:{
        flex:1,
        alignItems: 'center'
    }
})
