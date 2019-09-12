import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});
var amount=document.getElementById('amount');
var outputbox=document.getElementById('outputbox');

var button15 = document.getElementById('15B');
document.addEventListener('click', function(e)
{
  var element = e.target;
  if(element.tagName === 'BUTTON')
  {
    console.log(element.value);
   button15=amount+(amount*.15);
   outputbox=button15;
   return outputbox;
  }
} ,
 false);
 
 var button18 = document.getElementById('18B');
 document.addEventListener('click', function(e)
 {
   var element = e.target;
   if(element.tagName === 'BUTTON')
   {
     console.log(element.value);
    return this.button18=amount +(amount*.18);
   }
 } ,
  false);
  var button20 = document.getElementById('20B');
  document.addEventListener('click', function(e)
  {
    var element = e.target;
    if(element.tagName === 'BUTTON')
    {
      console.log(element.value);
     return this.button20=amount +(amount*.20);
    }
  } ,
   false);
 

loadInitializers(App, config.modulePrefix);

export default App;
