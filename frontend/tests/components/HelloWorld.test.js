import  { customMount } from '@tests/setup.js';
import HelloWorld from '@/components/HelloWorld.vue';
import { describe, it, expect } from 'vitest';


describe('HelloWorld', () => {
    it('renders the message passed as a prop', () => {
        const wrapper = customMount(HelloWorld, {
            props: {
                msg: 'Hello, World!'
            }
        });
        expect(wrapper.text()).toContain('Hello, World!');
    });
    it('renders the default message when no prop is passed', () => {
        const wrapper = customMount(HelloWorld);
        expect(wrapper.text()).toContain('Welcome to Your Vue.js App');
    });
})