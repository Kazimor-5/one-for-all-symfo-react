<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MissionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\String\Slugger\SluggerInterface;

#[ORM\Entity(repositoryClass: MissionRepository::class)]
#[ApiResource(
    #normalizationContext={"groups"={"mission:read"}},
    #denormalizationContext={"groups"={"mission:write"}}
)]
class Mission
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['mission:read', 'mission:write'])]
    private $category;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['mission:read', 'mission:write'])]
    private $name;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['mission:read', 'mission:write'])]
    private $scope;

    #[ORM\Column(type: 'text')]
    #[Groups(['mission:read', 'mission:write'])]
    private $description;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Groups(['mission:read', 'mission:write'])]
    private $picture;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['mission:read'])]
    private $dateStart;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['mission:read'])]
    private $dateEnd;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['mission:read', 'mission:write'])]
    private $status;

    public function __construct()
    {
        $this->dateStart = new \DateTime();
        $this->dateEnd = new \DateTime();
        $this->status = 'pending';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getScope(): ?string
    {
        return $this->scope;
    }

    public function setScope(string $scope): self
    {
        $this->scope = $scope;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->dateStart;
    }

    public function setDateStart(?\DateTimeInterface $dateStart): self
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->dateEnd;
    }

    public function setDateEnd(?\DateTimeInterface $dateEnd): self
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }








    
}