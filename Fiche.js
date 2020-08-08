import React, { Component } from 'react';
import {StyleSheet, Text, TextInput,View ,Image,TouchableOpacity } from 'react-native'

export default class Fiche extends React.Component {


  render() {
    return (

      <View style={styles.regForm}>

        <View style={styles.regFo}>
              <Text      style={styles.txt1}>Feunard</Text>
                  <Text      style={styles.text1}>PV</Text>
                    <Text      style={styles.text2}>120</Text>
                  <Image     style={styles.IMGflamme} source= {require('./Img/flamme1.png')}/>
            <Image     style={styles.IMGbis} source= {require('./Img/evoli.png')}/>
            <Image     style={styles.IMG} source= {require('./Img/pokemon.png')}/>

            <Text      style={styles.text}>N° 038 Pokémon Renard Taille : 1.1m Poids : 19.9 kg</Text>
              <Image     style={styles.IMGflamme1} source= {require('./Img/flamme.png')}/>
              <Text      style={styles.txt0}>Manteau de Feu           30</Text>
                <Text      style={styles.txt}>Attachez une carte Énergie de vote pile de défausse à ce Pokémon. </Text>
                  <Image     style={styles.IMGflamme2} source= {require('./Img/flamme.png')}/>
                  <Image     style={styles.IMGetoile} source= {require('./Img/etoile.png')}/>
              <Text      style={styles.txt1bi1}> Crinière de feu              70 </Text>


              <TouchableOpacity style={styles.bouton}>

                          <Text style={styles.btntext1}> Faiblesse   </Text>
                          <Image     style={styles.IMGeau} source= {require('./Img/eau.png')}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.bouton2}>
                                  <Text style={styles.btntext}> Resistance  </Text>
                              </TouchableOpacity>
                      <TouchableOpacity style={styles.bouton1}>
                                <Text style={styles.btntext}> Retraite  </Text>
                            </TouchableOpacity>
                            <Text      style={styles.txt1bis}>Illus, Megumi Higuchi</Text>
                            <Text      style={styles.txt1bis1}>On dit qu'il vit 1000 ans  et que chacune de ses queues a un pouvoir magique</Text>


  </View>


  </View>
      );
    }
  }
//ranger dans l'ordre d'apparition dans la carte
const styles = StyleSheet.create({

  linearGradient: {
     flex: 1,
     paddingLeft: 15,
     paddingRight: 15,
     borderRadius: 5
   },
  regForm: {
    flex: 1,
      borderColor: '#F6F734',

      borderWidth: 11,
      paddingLeft: 8,
       borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E47105',
        alignSelf:'stretch',
        flex:1,



  },

regFo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:10,
      borderRadius:10,
      paddingTop:'20%',
      marginTop:'50%',
      backgroundColor:'#E47105',
      paddingLeft: 8,


      /* Obligatoire si on veut "voir" le dégradé */

      alignSelf:'stretch',
      flex:1,


},
txt1: {
  justifyContent:"center",
  fontSize:30,
  fontWeight: "bold",
  bottom:'32%',
  right : '8%',
  fontFamily: 'Roboto',
  color: '#000000',
  borderColor: '#C8C2BF',
  width : '60%',
  paddingTop:'3%',
  marginRight :'9%',
  paddingLeft:'5%',
  borderWidth: 5,
  height:'15%',
   borderRadius:20,

},
text1: {
  justifyContent:"center",
  fontSize:10,
  fontWeight: "bold",
  bottom:'39%',
  left : '20%',
  fontFamily: 'Roboto',

  height:'16%',


},
text2: {
  justifyContent:"center",
  fontSize:25,
  fontWeight: "bold",
  bottom:'58%',
  fontFamily: 'Roboto',
  left : '28%',
  height:'16%',


},
IMGbis: {
  position: 'absolute',
  zIndex: 100 ,
  // Pour décaler l'image du haut de l'écran
  width : '15%',
  height : '15%',

  bottom:'135%',
  right:'90%',


},
  IMG: {
    position: 'absolute',

    // Pour décaler l'image du haut de l'écran
    width : '90%',
    height : '50%',
    justifyContent:"center",
    bottom:'87%',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 5,

    borderColor: '#C8C2BF',
  },
  IMGflamme : {



    // Pour décaler l'image du haut de l'écran
    width : '15%',
    height : '10%',
    justifyContent:"center",
    bottom:'76%',
    left:'43%',


  },

  text: {

    paddingLeft:'15%',
    paddingTop:'3%',
    height : '15%',
    justifyContent:"center",
    backgroundColor:'#E5E5E5',
    borderWidth: 5,
     borderRadius:20,
     height:'8%',
    borderColor: '#C8C2BF',
    width : '96%',
    fontSize:10,
    bottom:'28%',
    right:'1%',
  },

  txt0: {


    justifyContent:"center",
    fontSize:24,
    fontWeight: "bold",
    paddingLeft:'16%',
    bottom:'30%',
    fontFamily: 'Roboto',
    color: '#000000',

  },
  txt:{
        right:'0%',
        bottom:'28%',
        fontSize:14,
        color: '#000000',
          width : '95%',

        },

          IMGflamme1: {

            justifyContent:"center",
            bottom:'24%',
            right:'49%',


          },
  txt1bi1: {
    justifyContent:"center",
    fontSize:24,
    fontWeight: "bold",
    bottom:'30%',
    fontFamily: 'Roboto',
    color: '#000000',
    paddingLeft:'17%',

  },
  IMGflamme2:{
        right:'50%',
        bottom:'18%',
        },
        IMGetoile:{
          right:'42%',
          bottom:'24%',

      },

                      bouton:{
                            borderWidth: 6,

                            borderColor: '#C8C2BF',
                            alignSelf:'stretch',
                            width:'40%',
                            backgroundColor:'#E5E5E5',
                            bottom:'5%',
                            paddingVertical:10,
                            borderRadius:20,
                            justifyContent:'center',
                            fontStyle: 'italic',
                            height:'6%',
                            right : '5%',

                        },
                        IMGeau:{

                              alignSelf:'stretch',



                              paddingVertical:10,
                              marginBottom :'0%',
                              justifyContent:'center',

                              height:'6%',
                              left : '60%',

                          },
                        bouton2:{

                              alignSelf:'stretch',
                              width:'30%',
                              borderColor: '#C8C2BF',
                              bottom:'12%',
                              borderWidth: 6,
                              paddingVertical:10,
                              borderRadius:20,
                              backgroundColor:'#E5E5E5',
                              justifyContent:'center',
                              fontStyle: 'italic',
                              height:'7%',
                              left : '30%',

                          },

                                              bouton1:{

                                                    alignSelf:'stretch',
                                                    width:'30%',
                                                    justifyContent:'center',
                                                    fontStyle: 'italic',
                                                    backgroundColor:'#E5E5E5',
                                                    left : '70%',
                                                    paddingVertical:10,
                                                    borderColor: '#C8C2BF',
                                                    borderWidth: 6,
                                                    borderRadius:20,
                                                    justifyContent:'center',
                                                    bottom: '19%',
                                                    height:'6%',

                                                },

                        btntext :{
                            color : '#000000',
                              fontWeight: "bold",

                            },
                            btntext1 :{
                                color : '#000000',
                                  fontWeight: "bold",
                                  marginBottom :'-16%',
                                },
                            txt1bis:{
                                  right:'2%',
                                  bottom:'15%',
                                  fontSize:10,
                                  color: '#000000',
                                    width : '100%',

                                    },
                                          txt1bis1 :{
                                            textAlign : 'right',
                                             left:'20%',
                                            bottom:'18%',
                                            fontSize:10,
                                            color: '#000000',
                                              width : '57%',
                                              fontStyle: 'italic',

                                              },

   })
