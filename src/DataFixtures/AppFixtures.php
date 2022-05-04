<?php

namespace App\DataFixtures;

use App\Entity\Mission;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 10; $i++) {
            $mission = new Mission();
            $mission->setCategory('category');
            $mission->setName('name');
            $mission->setScope('scope');
            $mission->setDescription('description');
            $mission->setPicture('picture');
            $mission->setDateStart(new \DateTime());
            $mission->setDateEnd(new \DateTime());
            $mission->setStatus('status');
            $manager->persist($mission);
            }

        $manager->flush();
    }
}
