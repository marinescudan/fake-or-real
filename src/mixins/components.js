import cPage from '@/components/page/cPage';
import cHeader from '@/components/page/cHeader';
import cMain from '@/components/page/cMain';
import cFooter from '@/components/page/cFooter';
export const page = {
    components: {
        cPage,
        cHeader,
        cMain,
        cFooter,
    }
};

import cRow from '@/components/container/cRow';
import cCol from '@/components/container/cCol';
import cCard from '@/components/container/cCard';
export const layout = {
    components: {
        cRow,
        cCol,
        cCard,
    },
};

import cFigure from '@/components/media/cFigure';
import cVimeo from '@/components/media/cVimeo';
export const media = {
    components: {
        cFigure,
        cVimeo,
    },
};

import cButton from '@/components/input/cButton';
import cLink from '@/components/input/cLink';
import cInputLocale from '@/components/input/cInputLocale';
export const form = {
    components: {
        cButton,
        cLink,
        cInputLocale,
    },
};

import cNewsStats from '@/components/content/news/cNewsStats';
import cAddsStats from '@/components/content/adds/cAddsStats';
import cVideosStats from '@/components/content/videos/cVideosStats';
export const contentTypes = {
    components: {
        cNewsStats,
        cAddsStats,
        cVideosStats,
    },
};

