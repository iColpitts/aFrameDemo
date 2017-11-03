# aFrameDemo

Original outline can be found here: https://github.com/DamesMakingGames/intro-to-webvr/blob/master/content.md

# Demo Plans
1. The A-frame scene
2. Hosting on Glitch
3. Inspector
4. The Registry 
5. Interactin’

# The A-Frame Scene

- A-Frame is just built on HTML, so if you're familiar with it, you're good to go! If not, it's pretty easy to pick up. There are opening tags, closing tags, and attributes!

- The `a-scene` entity is our environment – just like a Unity scene. It handles your canvas, lights, render loop and controls.
- a-box, a-sphere, a-cylinder, a-plane, a-sky

_Primitives_ wrap up complex functionality

They’re like prefabs in Unity.

- These are _primitives_, which wrap up complex functionality, including components, in an easy-to-use custom element with some useful defaults. Super great for beginners!

- They are entities under the hood

Primatives that are automatically in your scene include: `a-sky`, `a-camera`, and `a-cursor`

Two lights are also automatically added: one directional and one ambient. When replaced all of these automatically added primatives get overwritten.

- If you're familiar with Unity, these are like prefabs.

- They allow u to create meshes, render 360° content, customize the environment, position the camera + more

- We can compose them together to do cool stuff.

# Hosting on Glitch

https://glitch.com/edit/#!/fitc-demo?path=cool-file.html:7:9

- Start where someone left off by cicking Remix this to create a new editable version of this code.

- When your code is highlighted you can click on the raised hand to automatically ask the community for help. It will appear ont he homepage of people who have similar code

- Invite collaborators for real time collaborations

- host your assets in the assets folder, and then everything is in one place!

# The Inspector

* It's **hooked up to the Registry**
* Lets you fiddle around with values
* copy html code for the existing set up
* do mocap testing for VR movements and debugging
* It's the DOM inspector for VR

- The A-Frame inspector is hooked up to the Registry, so you can play around with adding components to your scene there.

Pop it open with `<ctrl> + <alt> + i`

- Hit `control-option-I` to open the Inspector. The changes we make here won't be saved in your project, but you can easily copy the code by clicking the Copy button in the top left hand corner of the Inspector.

On the left we have a tree view of everything in our scene, mirroring the structure of our HTML.

On the right, we can change properties of the selected component.

- tip: Give your elements an id to distinguish between them in the Inspector!

# The Registry

Kinda like the Unity Asset Store

- You can find lots of cool plugins created by the community, copy the path to their source links, and include them via a `<script>` tag right in your HTML.

- All of the components will be automatically registered for you.

- We're using the hosted version for this workshop, but you'll want to download packages if you're working locally.

Some packages in the regisry can out of the box give you:
- environment (mountains, ocean, trees etc.)
- physics
- interactions
- controller basics for different platforms (Vive, Rift etc.)

## Add an environment

Quick and easy way to spin up a demo:

1. Include the `aframe-environment-component`
2. Add `<a-entity environment="preset: yavapai; numDressing: 500"></a-entity>`

- A bunch of customization options in the package repo including sky color, play area size, dressing (number of objects) etc.

# Interactin'

## Entity-Filtering with Attribute Selectors

This means we can ask for entities that have or don’t have a certain set of components.

`document.querySelector('[enemy]:not([alive])’)`

## Handling gaze-based interactions

Using A-Frame's built-in Cursor component allows you to use raycasting to collide with objects simulating a click of WebGL objects. The cursor component emits synthetic events like `click`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`.

## Cursor

The syntax for the component is: `event-set__${id}="_event: ${eventName}; ${someProperty}: ${toValue}"`

* `${id}`: identifier which allows you to have multiple event components on one entity
* `${eventName}`: event which will trigger property change
* `${someProperty}: ${toValue}`: the property and value you want to change it to respectively

# Javascriptin'

Tip: It's just javascript.

## Use JavaScript to modify the scene and handle events

- Using Query Selectors we can begin to alter our scene and entities with javascript. These queries can be IDs, classes, or data attributes. Because A-Frame is based on HTML, we can use query selectors out of the box.

`document.querySelector(‘#player’)`

_If you aren't familiar with querySelector, check the Readme for a link to a great overview_

Once we have selected the appropriate entity, we have access to change and add properties and use methods associated with it, including methods like:

* `.setAttribute`
* `.removeAttribute`
* `.createElement`
* `.removeChild`

## Entity-Filtering with Attribute Selectors

This means we can ask for entities that have or don’t have a certain set of components.

`document.querySelector('[enemy]:not([alive])’)`

# Resources

* [Awesome A-Frame](https://github.com/aframevr/awesome-aframe)
* [The A-Frame Registry](https://aframe.io/aframe-registry/): Like the asset store for Unity
* [A-Frame Docs](https://aframe.io/docs/0.7.0/introduction/)
* [A-Frame School](https://aframe.io/aframe-school/#/2/5)
* [Hologram](https://hologram.cool/): A no-code environment with Google Blocks integration (tons of free models)
* [Ottifox](http://ottifox.com/): Visual editor that exports to A-Frame
* [SteamVR](http://steamcommunity.com/games/250820/announcements/detail/1256915122285021922): Vive on Mac!
* [Guri](https://gurivr.com/)
* [MozVR](https://mozvr.com/)
* [https://webvr.rocks/](https://webvr.rocks/)