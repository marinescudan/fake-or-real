import Vue from 'vue';

import cPage from '@/components/page/cPage';
import cHeader from '@/components/page/cHeader';
import cMain from '@/components/page/cMain';
import cFooter from '@/components/page/cFooter';
export const page = Vue.mixin({
    components: {
        cPage,
        cHeader,
        cMain,
        cFooter,
    }
});

import cRow from '@/components/container/cRow';
import cCol from '@/components/container/cCol';
import cCard from '@/components/container/cCard';
export const layout = Vue.mixin({
    components: {
        cRow,
        cCol,
        cCard,
    }
});

import cFigure from '@/components/media/cFigure';
import cVimeo from '@/components/media/cVimeo';
export const media = Vue.mixin({
    components: {
        cFigure,
        cVimeo,
    }
});

import cButton from '@/components/input/cButton';
import cLink from '@/components/input/cLink';
import cInputLocale from '@/components/input/cInputLocale';
export const form = Vue.mixin({
    components: {
        cButton,
        cLink,
        cInputLocale,
    }
});

