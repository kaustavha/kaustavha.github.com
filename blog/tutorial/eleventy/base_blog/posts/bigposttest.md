---
title: big post test
description: This is a post on My Blog about agile frameworks.
date: 2018-05-01
tags:
  - another-tag
layout: layouts/post.njk
---

---

Working with massive legacy frontends; Part 1: Service oriented architecture
Part 1: Service oriented front-end architecture and sharing code
\At IBM Cognos I got a chance to work with the Cognos Analytics codebase with their newer components. Cognos is a 15 year old application with several sub-applications underneath powered by hundreds of developers. And that's just the front-end code. 
An approach to sharing code between different products is using a service oriented architecture. Service oriented front-end architecture. 
As the application boots up, a base layer uses asynchronous module definitions (AMD) to load up shared service components using require.js before the rest of the product and specific perspectives load. 
Bootstrap foundation layer -> Pull in shared services -> Start Directory page -> Start [App1 | App2 | App3]
The product itself contains several different perspectives, for different business needs like data-exploration, creating data driven presentations, reports or custom dashboards. Each of these perspectives load after the initial base layer. Each of these perspectives or applications can declare services that boot up before they do, which can be used by the other perspectives. This is done by declaring a JSON specification which is read in at the initial bootstrap time. 
========= Services Layer ============
   ===== Top component =====
== React App == || == Legacy App == || == Jquery + React App ==


---

 Part 2 : Sharing data across products and rendering
Most of the business analytics applications read a encoded specification to render their specific data visualization. 
Different applications use different specs. Older applications use XML, newer ones use JSON. 
To communicate between applications we use a conversion service which transforms the specification and specification data type when required. 
In turn the accepting application uses backend APIs to re-link and validate data sources.


Post management tools menu

Upgrade
Kaustav Haldar
Responses (1)
Manage responses

Kaustav Haldar
Kaustav Haldar
What are your thoughts?﻿

Cancel
Respond
Leo Vitali
Leo Vitali
over 4 years ago

Great article dude, I like to read insights about this concept :-)
I still cannot understand where this “movement” about the importance of the neural connections and rewiring can explain how our habits/abilities ocurr. Eventually neuroplasticity, is ...
Read More

Only you can see this message
This story's distribution setting is off. Learn more

sara
A primer on the human brain for bio-hackers
Kaustav Haldar
Kaustav Haldar
Dec 13, 2015 · 9 min read





## I’ve spent some time in the online nootropics community and I’ve found a disconcerting lack of understanding of the human brain.
This bothered me enough to propel me to write this article. A child playing with fire can get burnt, but adults taking drugs may not realize they’re getting burnt till it’s too late. Hopefully we can explain some relevant parts of the brain in layman’s terms and help some people avoid disinformation.
We’ll look at the human brain where most cognition enhancing chemicals work, starting at an abstract understanding of the mind and working our way through safety, chemistry and a couple advanced cognitive science topics. I’ll be using this book, and what I’ve learned over time from various research papers and people in nootropics fb & reddit groups to create this.
The mind

We’ll start a little more abstractly than going directly to the drugs, we’ll start where drugs do their work.
So what is the mind?
The mind, or your mind, is basically who you are. And who you are is basically an amalgamation of all your past experiences, habits, ideas, thoughts and memories. At the end of the day free will isn’t so free. It’s relatively predictable that a serial criminal will commit another crime and a pastor of a church won’t think too highly of someone smoking cannabis right outside. You see the mind stores data, just as your computer does, and likewise can commit operations on this data. When you add two numbers, your eyes send this information along to your mind and based on a predefined algorithm you learnt the mind creates an answer which you can then write down. What you look at and what you write, furthermore how you write as well, are all controlled by you, or more specifically your mind. It’s just who you are.
You build on top of what you already know. This is important. Even if you learn 10% more today, this can like compounding interest result in great returns down the road. But the inverse is also important. Certain nootropics are implicated in neural plasticity, the ability to change ones beliefs. If you have misconceptions, or fears, you need to learn other things to override these pre-conceptions.
The Brain

Ok lets get off our high horse of abstract cognitive science and lets talk about that soft squishy thing in your cranium. A computer has some internal hardware that’s running the software you’re using to read this right now, and so does your brain.
And just as a computer is made of individual modules with specialized functions, so is your brain. Your computer has a CPU, your brain has a cerebral cortex. Your computer has RAM, your brain has a medulla. The computer parts don’t actually have any functionality in common with the brain, just a very loose analogy here. But you should be able to understand why an undifferentiated increase in cerebral volume as advertised by drugs like NSI-189 may not necessarily be good from this. Additionally your brain sits in cerebrospinal fluid and this protects it from brain injury from shocks. A mass increase in neuronal volume has to equal a decrease in the cerebrospinal buffer. Unless your cranium increases in size as well or your brain is severely atrophied from high stress, chronic sleep deprivation, previous brain injuries, genetic defects or drug abuse.
The frontal lobe is thought to be responsible for most high level cognitive functions. This area is further subdivided, and the majority of acetylcholine based transmission occurs here in a group of structures referred to as the basal forebrain, in case you wondered why everyone keeps saying supplement with choline sources. This contains some interesting structures like:
The Nucleus Accumbens which has a significant role in the cognitive processing of motivation, pleasure, and reward and reinforcement learning and addition.
The Nucleus Basalis which plays a role in the malleability of intelligence or neuroplasticity
But unlike a computer which stores binary data at the lowest level, your brain stores information and learned habits (algorithms if you’re tech inclined) as connections. Yes you read that right, connections. Rather alien to the uninitiated. So let me give you an analogy. Skip right over if you’re familiar with this concept to the chapter titled neurons.
Lets have two colors of strings, white and black. The white strings represent 1, and the black ones represent 0. You can create a series of numbers by connecting the strings together.
E.g.
White — Black — white
That gives us 101. We can arbitrarily say that 101 in our system stands for happiness.
And lets have the number 010, which would be black — white — black. Lets say that this represents sadness.
A small neural network could have an input neuron connected to both of these circuits
W — B — W <-> {Input} <-> B — W — B
The input might trigger either circuit dependent on how the input makes you feel. For example you could see cake and trigger the happiness circuit, or see an empty cake platter and trigger the sadness circuit.
We can addititively build this circuit.
Let: W — W — W stand for your ability to bake cake
Let: B — B — B stand for your ability to be incredibly lazy
These would be wired up to the happiness and sadness circuits. The more cake you get, the more you wish to do whatever activity you did to get that cake, assuming you like cake. Your brain is also more likely to create more connections making you better at making cake.
But the strings in the brain are a little more complex, which brings us to our next point.
The neuron

Hopefully you know what a cell is since explaining that is a little out of scope.
Neurons are basically the cellular units powering your brains abilities. But they don’t just stop there. Neurons proliferate throughout your body. You have nerves carrying commands from your brain or your spine to the farthest extremities of your body and these nerves are just strings of connected neurons.
Neurons are separated by a microscopic gap, called the synaptic cleft. We’ll examine that later in more detail.
Neurons are electro-chemical components in our cerebral system. When a thought occurs neurons relevant to that thought fire in harmony, electrical charges race down the axon (The long tail like thing) of one neuron, causing chemical messengers to get released into the synaptic cleft, trigger receptors on the other side and if the neuron whose receptors it triggered feels like it, it too will fire off an electric charge down its axon to neurons it’s connected to.
(For a more accurate and scientific explanation of this phenomenon and how it’s caused I refer you tothis question on stackexchange. )
Feels like it? What do you mean feels like it? I demand it fire that charge.
Well you see your memories and thoughts aren’t just made from neurons that transmit the signal, they’re also made from neurons that don’t fire.
Babies are thought to have a very large number of neurons, all connected, and a lot of these connections fade. The synapses still exist, they’re just not triggered. This is called an inhibitory link. And that’s how babies learn to an extent. The opposite is an excitatory link. This link is actually learnt by the neuron. In this example your neurons learnt when you first tasted cake and created your internal representations and connections associated with cake.
In reality many neurons are required for even the simplest concept. And your ideas and thoughts of one thing can help create new ideas and thoughts and understand things via analogy. At the end of the day all of the representations and algorithms in your brain are signals and merge with other signals via convolution. If this fascinates you check out the Eliasmith and Anderson paper on a Neural Engineering Framework and the subsequent material.
But I’m a bio-hacker and I wanna take drugs that make me smarter! You’ve taught me nothing relevant!
Relax, we’re getting to it. Lets take a closer look at the synapse and hopefully that’ll appease you.
The synapse

As I mentioned before, it’s quite simple, neuron A or the presynaptic neuron fires, this releases chemical messengers or neurotransmitters which carry the signal across the tiny gap, lock into receptor sites on the other end and can cause the postsynaptic neuron or neuron B to fire. The receptors and neurotransmitters are something like 3-dimensional jigsaw puzzle pieces. There’s a few different molecules that can trigger them if they have the right shape. A great example is LSD. It fits snugly into the receptor site for serotonin but it does something rather different from your normal serotonin in the brain or from a serotonin precursor like 5-HTP.
But the presynaptic neuron dumped all these neurotransmitters into the gap. What happens to the left overs? Do they all cross the synaptic cleft and trigger receptors? No they do not. The neurons have a vent via which it sucks back excess neurotransmitters using a transporter protein. This is called reuptake. Reuptake inhibitors like fluoxetine (Prozac) or methylphenidate (Ritalin) block this mechanism. This allows more neurotransmitters to bond to the receptors on the other end.
There’s also enzymes in the cerebrospinal fluid which breaks down left over neurotransmitters. For example acetylcholinesterase inhibitors like Huperzine prevent them from doing so, breaking down acetylcholine more specifically in this case.
When people speak about upregulating something in the context of cognition enhancing drugs, the number of receptor sites of a certain type of neurotransmitter is being increased. That is the density of these receptors in all of your brain and body where applicable is increased. And you hopefully gathered from the section on the brain that certain areas of the brain rely more heavily on specific types of neurotransmitters and receptors in the synapses than others. To recap, the prefrontal cortex thought to be responsible for higher cognitive functioning relies heavily on acetylcholine. But also be warned that these receptor sites have subtypes. For example the neurotransmitter adenosine, whose receptor gets blocked by coffee, has 4 of them.
Speaking of coffee, let me introduce you to a couple of words. Antagonists and agonists. An antagonist basically blocks a receptor site preventing it from being triggered normally. Caffeine is an adenosine receptor antagonist. An agonist is the opposite. It triggers the receptor. They can be full or partial in their effect. There also exists inverse agonists which trigger the receptor but causes the opposite response of the agonist. Speaking of agonists, one should also know what an allosteric modulator is. Certain substances indirectly influence the the effects of an agonist or antagonist. They can be either positive or negative, bind to a site that isn’t the active receptor site and change the behaviour of the receptor, increasing or decreasing its affinity or easy of activation from certain neurotransmitters.
Summary
Hopefully we learned a bit of the common jargon in the nootropics scene and what they mean and how the brain works at a very base level. Cognition enhancing pharmaceuticals usually affect enzymes in the cerebrospinal fluid which breaks down neurotransmitters, increase or decrease reuptake of neurotransmitters, increase/decrease receptor density, or increase/decrease the effect of a neurotransmitter on a receptor.

Also worth remembering form the bit on the mind, you are the sum of all your experiences. A small improvement over extended periods of time can possibly lead to worthwhile gains in the long run, sort of like compounding interest.
Note: Nothing I say here constitutes medical advice. Mistakes may occur in these writings. Feedback/corrections is welcome.
5
1

Neuroscience
Nootropics
5 claps
1 response





Kaustav Haldar
WRITTEN BY

Kaustav Haldar
Autodidact software developer and budding biohacker. Email: hi@kaustav.me
See responses
Discover Medium
Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch
Make Medium yours
Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore
Become a member
Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just $5/month. Upgrade
About
Help
Legal